const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Pizzas = require('../../models/products/Pizzas')

const pizzasRouter = express.Router()

pizzasRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Pizzas.create(req.body)
      res.status(200).send({ message: 'Pizza created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

pizzasRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const pizzas = await Pizzas.find()
      res.status(200).json(pizzas)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = pizzasRouter
