const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Articles = require('../models/Articles')

const articlesRouter = express.Router()

articlesRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Articles.create(req.body)
      res.status(200).send({ message: 'Article created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

articlesRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const articles = await Articles.find({ citiesId: req.params.cityId })
      res.status(200).json(articles)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = articlesRouter
