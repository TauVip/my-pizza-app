const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Combos = require('../../models/products/Combos')

const combosRouter = express.Router()

combosRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Combos.create(req.body)
      res.status(200).send({ message: 'Combo products created!' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

combosRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const combos = await Combos.find()
      res.status(200).json(combos)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

combosRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const combos = await Combos.find({ citiesId: req.params.cityId })
      res.status(200).json(combos)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

combosRouter.get(
  '/combo/:comboId',
  expressAsyncHandler(async (req, res) => {
    try {
      const combo = await Combos.findById(req.params.comboId)
      res.status(200).json(combo)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = combosRouter
