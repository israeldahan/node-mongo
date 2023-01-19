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

const userSchema = new Schema({
    user_id: Number,
    name: String, // {type: String}
    enail: String, // {type: String}
    password: String, // {type: String}
})

module.exports = mongoose.model('User', userSchema)
