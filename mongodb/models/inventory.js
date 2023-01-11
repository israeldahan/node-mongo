const mongoose = require('mongoose')
const { Schema } = mongoose
// String
// Number
// Boolean | Bool
// Array
// Buffer
// Date
// ObjectId | Oid
// Mixed

// https://mongoosejs.com/docs/api.html#schema_Schema.Types

const inventorySchema = new Schema({
    inventory_id: Number,
    title: String, // {type: String}
})

module.exports = mongoose.model('Inventory', inventorySchema)
