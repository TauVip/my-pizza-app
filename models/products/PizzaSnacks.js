const mongoose = require('mongoose')

const pizzaSnacksSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      unique: true,
      required: true
    },
    price: {
      type: {
        small: { type: Number },
        medium: { type: Number },
        big: { type: Number }
      },
      required: true
    },
    disabled: {
      type: [Object]
    }
  },
  { timestamps: true }
)
const PizzaSnacks = mongoose.model('PizzasSnacks', pizzaSnacksSchema)
module.exports = PizzaSnacks
