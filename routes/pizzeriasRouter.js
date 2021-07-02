const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Pizzerias = require('../models/Pizzerias')

const pizzeriasRouter = express.Router()

pizzeriasRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Pizzerias.create(req.body)
      res.status(200).send({ message: 'Pizzeria created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

pizzeriasRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const pizzerias = await Pizzerias.find()
      res.status(200).json(pizzerias)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

pizzeriasRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const pizzerias = await Pizzerias.find({ cityId: req.params.cityId })
      res.status(200).json(pizzerias)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = pizzeriasRouter
