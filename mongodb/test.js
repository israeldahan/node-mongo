const mongoose = require('mongoose')
mongoose.connect(
        // `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, 
        ''
      )
      .then(() => console.log(` 🍃 mongo-db connected`))
      .catch(console.log)

const { Schema } = mongoose
const inventorySchema = new Schema({
    inventory_id: Number,
    title: String, // {type: String}
})

let inventory = mongoose.model('Inventory', inventorySchema)

// let inventoryData = new inventory({inventory_id: 2, title: "Inventory 0002"})
// inventoryData.save()

let findInventory = async () => {
    let result = await inventory.find({})
    return result
}
findInventory().then((result) =>console.log(result))

