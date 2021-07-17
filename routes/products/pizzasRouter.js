const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Pizzas = require('../../models/products/Pizzas')
const PizzaSnacks = require('../../models/products/PizzaSnacks')

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
pizzasRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const pizzas = await Pizzas.find(
        { citiesId: req.params.cityId },
        {},
        { sort: { createdAt: -1 } }
      )
      res.status(200).json(pizzas)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)
pizzasRouter.get(
  '/item/:pizzaId',
  expressAsyncHandler(async (req, res) => {
    try {
      const pizza = await Pizzas.findById(req.params.pizzaId)
      const pizzaSnacks = await PizzaSnacks.find({ _id: pizza.snacksId })
      res.status(200).json({ pizza, pizzaSnacks })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

pizzasRouter.post(
  '/snacks',
  expressAsyncHandler(async (req, res) => {
    try {
      await PizzaSnacks.create(req.body)
      res.status(200).send({ message: 'Pizza snacks created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)
pizzasRouter.get(
  '/snacks/all',
  expressAsyncHandler(async (req, res) => {
    try {
      const pizzaSnacks = await PizzaSnacks.find()
      res.status(200).json(pizzaSnacks)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = pizzasRouter
