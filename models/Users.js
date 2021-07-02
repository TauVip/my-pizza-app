const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
  {
    userPhone: {
      type: String,
      unique: true,
      required: [true, 'User phone is required']
    },
    name: { type: String },
    birthday: { type: String },
    email: { type: String, unique: true },
    subscribe: { type: Boolean, default: false }
  },
  { timestamps: true }
)
const Users = mongoose.model('Users', usersSchema)
module.exports = Users
