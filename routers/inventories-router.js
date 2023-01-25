const express = require("express");
const router = new express.Router();
const { Inventory , User} = require("../mongodb");
const {createInventory,
  updateInventory
} = require("../controllers/inventories-controller");


router.post("/", createInventory);

router.put("/:id", updateInventory);

router.delete("/:id", async (req, res) => {
  console.log("delete");
  const { id } = req.params;
  // const result = await Inventory.deleteOne({ inventory_id: id });
  const result = await Inventory.deleteMany({});
  res.status(200).json({ result });
});

router.get("/", async (req, res) => {
  let result = await Inventory.find({});
  res.status(200).json({ result });
});

router.use(async (err, req, res, next) => {
  if (res && res.headersSent) {
    return next(err);
  }

  if (!err.statusCode) {
    err.statusCode = 500;
  }
  return res.status(err.statusCode).json({ error: err.message });
});
module.exports = router