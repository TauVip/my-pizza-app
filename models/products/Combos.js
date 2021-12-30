const mongoose = require('mongoose')

const combosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    description: {
      type: String,
      unique: true,
      required: [true, 'Combo products description is required']
    },
    price: {
      type: {
        [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cities' }]: {
          type: Number
        }
      },
      required: [true, 'Combo products price is required']
    },
    image: {
      type: String,
      unique: true,
      required: [true, 'Combo products image is required']
    },
    items: {
      type: [
        {
          productsId: {
            type: {
              [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cities' }]: [
                {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Pizzas' || 'Products'
                }
              ]
            },
            required: true,
            validate: [value => value.length > 0, 'No outputs']
          },
          default: {
            type: {
              [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cities' }]: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Pizzas' || 'Products',
                required: true
              }
            }
          },
          category: { type: String, required: true },
          size: { type: String },
          thickness: { type: String }
        }
      ],
      required: true,
      validate: [value => value.length > 0, 'No outputs']
    },
    citiesId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cities'
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
