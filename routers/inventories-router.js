const express = require("express");
const router = new express.Router();
const { Inventory , User} = require("..mongodb");

router.post("/inventory", async (req, res) => {
  let body = req.body;
  let inventoryData = new Inventory(body);
  let result = await inventoryData.save();
  res.status(201).json({ result });
});

router.put("/inventory/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await Inventory.updateOne({ inventory_id: id }, data);
  res.status(200).json({ result });
});

router.delete("/inventory/:id", async (req, res) => {
  console.log("delete");
  const { id } = req.params;
  // const result = await Inventory.deleteOne({ inventory_id: id });
  const result = await Inventory.deleteMany({});
  res.status(200).json({ result });
});

router.get("/inventory", async (req, res) => {
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