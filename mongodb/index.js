const mongoose = require('mongoose')
const inventoryModel = require('./models/inventory')
const userModel = require('./models/user-model')

const connect = async () => {
    const { DB_USER, DB_PASS, DB_HOST , DB_NAME} = process.env
    mongoose.set('strictQuery', true);
    return mongoose
      .connect(
        // `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, 
        ''
      )
      .then(() => console.log(` 🍃 mongo-db connected`))
      .catch(console.log)
  }
  let models = {}
  Inventory = inventoryModel
  User = userModel
  
connect()
  
  module.exports = {Inventory, User}