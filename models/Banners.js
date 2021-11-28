const mongoose = require('mongoose')

const bannersSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      unique: true,
      required: [true, 'Banner image is required']
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
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Articles'
    }
  },
  { timestamps: true }
)
const Banners = mongoose.model('Banners', bannersSchema)
module.exports = Banners
