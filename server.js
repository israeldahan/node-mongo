require("dotenv").config();
const express = require("express");
const usersRouter = require('./routers/users-router')
const inventoriesRouter = require('./routers/inventories-router')

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res, next) => {
  res.status(200).json({
    server: "1.0.0",
    name: "nodejs-api-server",
  });
});



app.use('/users', usersRouter)
app.use('/inventory', inventoriesRouter)

const server = app.listen(port, () =>
  console.log(` 🚀 server started on port ${port}`)
);
module.exports = { app, server };
