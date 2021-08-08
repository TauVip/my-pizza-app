const mongoose = require('mongoose')

const combosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Combo products name is required']
    },
    description: {
      type: String,
      unique: true,
      required: [true, 'Combo products description is required']
    },
    price: {
      type: Number,
      required: [true, 'Combo products price is required']
    },
    items: {
      type: [
        {
          productsId: {
            type: [
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Pizzas' || 'Products',
                unique: true
              }
            ],
            required: true,
            validate: [value => value.length > 0, 'No outputs']
          },
          default: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pizzas' || 'Products',
            required: true
          },
          category: { type: String, required: true },
          size: { type: String },
          thickness: { type: String }
        }
      ],
      required: true,
      validate: [value => value.length > 0, 'No outputs']
    }
  },
  { timestamps: true }
)
const Combos = mongoose.model('Combos', combosSchema)
module.exports = Combos
