const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
  {
    userPhone: {
      type: String,
      required: [true, 'User phone is required']
    },
    name: { type: String },
    birthday: { type: String },
    email: { type: String },
    subscribe: { type: Boolean, default: false }
  },
  { timestamps: true }
)
const Users = mongoose.model('Users', usersSchema)
module.exports = Users
