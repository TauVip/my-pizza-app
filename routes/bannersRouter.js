const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Banners = require('../models/Banners')

const bannersRouter = express.Router()

bannersRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Banners.create(req.body)
      res.status(200).send({ message: 'Banner created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

bannersRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const banners = await Banners.find({ citiesId: req.params.cityId })
      res.status(200).json(banners)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

bannersRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const banners = await Banners.find()
      res.status(200).json(banners)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = bannersRouter
