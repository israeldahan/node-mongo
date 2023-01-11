require('dotenv').config()
const express = require('express')
const {connection , Inventory} = require('./mongodb')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.get('/', (req, res, next) => {
  res.status(200).json({
    server: '1.0.0',
    name: 'nodejs-api-server',
  })
})


app.post('/inventory', async (req,res) => {
  let body = req.body
  let inventoryData = new Inventory(body)
  let result = await inventoryData.save()
  res.status(201).json(
    {result}
)

})
app.get('/inventory', async (req, res) => {
    let result = await Inventory.find({  "inventory_id": 1})
    res.status(200).json(
        {result}
    )
    
})

app.use(async (err, req, res, next) => {
  if (res && res.headersSent) {
    return next(err)
  }

  if (!err.statusCode) {
    err.statusCode = 500
  }
  return res.status(err.statusCode).json({ error: err.message })
})

const server = app.listen(port, () => console.log(` 🚀 server started on port ${port}`))
module.exports = { app, server }
