const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: [true, 'Сity status required']
    },
    name: {
      type: String,
      unique: true,
      required: [true, 'City name required']
    },
    link: {
      type: String,
      unique: true,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
const Cities = mongoose.model('Cities', citiesSchema)
module.exports = Cities
