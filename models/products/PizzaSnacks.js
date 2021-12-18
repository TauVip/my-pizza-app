const mongoose = require('mongoose')

const pizzaSnacksSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      unique: true,
      required: [true, 'Pizza snack image is required']
    },
    name: {
      type: String,
      unique: true,
      required: [true, 'Pizza snack name is required']
    },
    price: {
      type: {
        [String]: {
          type: {
            small: { type: Number },
            medium: { type: Number },
            big: { type: Number }
          }
        }
      },
      required: [true, 'Pizza snack price is required']
    },
    disabled: {
      type: [
        {
          thickness: { type: String },
          size: { type: [String] }
        }
      ]
    }
  },
  { timestamps: true }
)
const PizzaSnacks = mongoose.model('PizzasSnacks', pizzaSnacksSchema)
module.exports = PizzaSnacks
