const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Users = require('../models/Users')

const usersRouter = express.Router()

usersRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const user =
        (await Users.findOne({ userPhone: req.body.userPhone })) ||
        (await Users.create(req.body))

      return res.status(200).json(user)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

usersRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const users = await Users.find()
      res.status(200).send(users)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = usersRouter
