const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Product category is required']
    },
    name: {
      type: String,
      unique: true,
      required: [true, 'Product name is required']
    },
    image: {
      type: String,
      unique: true,
      required: [true, 'Product image is required']
    },
    info: {
      type: String,
      unique: true
    },
    defaultCount: {
      type: String,
      required: [true, 'Product defaultCount is required']
    },
    weight: { type: Number },
    price: {
      type: Number,
      required: [true, 'Product price is required']
    },
    description: {
      type: {
        energyValue: { type: Number },
        proteins: { type: Number },
        fats: { type: Number },
        carbohydrates: { type: Number },
        addInfo: { type: [String] }
      }
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
const Products = mongoose.model('Products', productsSchema)
module.exports = Products
