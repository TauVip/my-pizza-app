const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      unique: true,
      required: [true, 'Article image is required']
    },
    title: {
      type: String,
      unique: true,
      required: [true, 'Article title is reqired']
    },
    description: {
      type: String,
      unique: true,
      required: [true, 'Article description is required']
    },
    buttonDesc: String,
    citiesId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cities'
        }
      ],
      required: true,
      validate: [value => value.length > 0, 'No outputs']
    },
    addInfo: {
      type: {
        pizzaId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Pizzas'
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Products'
        }
      }
    }
  },
  { timestamps: true }
)
const Articles = mongoose.model('Articles', articlesSchema)
module.exports = Articles

// BonusActions Component
