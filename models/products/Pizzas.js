const mongoose = require('mongoose')

const pizzasSchema = new mongoose.Schema({
  images: {
    type: {
      traditional: {
        type: {
          small: { type: String },
          medium: { type: String },
          big: { type: String }
        }
      },
      thin: {
        type: {
          small: { type: String },
          medium: { type: String },
          big: { type: String }
        }
      }
    },
    required: [true, 'Pizza images is required']
  },
  name: {
    type: String,
    required: [true, 'Pizza name is required']
  },
  composition: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        canRemove: {
          type: Boolean,
          required: true
        }
      }
    ],
    required: true,
    validate: [value => value.length > 0, 'No outputs']
  },
  price: {
    type: {
      small: { type: Number },
      medium: { type: Number },
      big: { type: Number }
    },
    required: [true, 'Pizza price is required']
  },
  weight: {
    type: {
      small: { type: Number },
      medium: { type: Number },
      big: { type: Number }
    },
    required: [true, 'Pizza weight is required']
  },
  choiseType: {
    type: String,
    required: [true, 'Pizza choiseType is required']
  },
  snacks: {
    type: {
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  },
  description: {
    type: {
      energyValue: { type: Number, required: true },
      proteins: { type: Number, required: true },
      fats: { type: Number, required: true },
      carbohydrates: { type: Number, required: true },
      addInfo: { type: [String] }
    },
    required: [true, 'Pizza description is required']
  },
  citiesId: {
    type: [String],
    required: true,
    validate: [value => value.length > 0, 'No outputs']
  }
})
const Pizzas = mongoose.model('Pizzas', pizzasSchema)
module.exports = Pizzas
