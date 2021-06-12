const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Cities = require('../models/Cities')

const citiesRouter = express.Router()

citiesRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Cities.create(req.body)
      res.status(200).send({ message: 'City created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

citiesRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const cities = await Cities.find()
      res.status(200).json(cities)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

citiesRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const city = await Cities.findById(req.params.cityId)
      res.status(200).json(city)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = citiesRouter
