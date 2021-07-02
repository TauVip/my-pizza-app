const mongoose = require('mongoose')

const pizzeriasSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Pizzeria name is required']
    },
    link: {
      type: String,
      required: [true, 'Pizzeria link is required']
    },
    deliveryRating: {
      type: {
        deliveryTime: { type: Number },
        rating: { type: Number }
      }
    },
    metroStation: { type: [String] },
    address: {
      type: String,
      unique: true,
      required: [true, 'Pizzeria address is required']
    },
    delivery: {
      type: {
        deliveryMethod: { type: String },
        deliverySchedule: { type: String }
      }
    },
    restaurantSchedule: { type: String },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cities',
      required: [true, 'Pizzeria city ID is required']
    }
  },
  { timestamps: true }
)
const Pizzerias = mongoose.model('Pizzerias', pizzeriasSchema)
module.exports = Pizzerias
