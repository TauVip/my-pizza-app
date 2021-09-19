const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const Products = require('../../models/products/Products')

const productsRouter = express.Router()

productsRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      await Products.create(req.body)
      res.status(200).send({ message: 'Product created' })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)
productsRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const products = await Products.find()
      res.status(200).json(products)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)
productsRouter.get(
  '/item/:productId',
  expressAsyncHandler(async (req, res) => {
    try {
      const product = await Products.findById(req.params.productId)
      res.status(200).json(product)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)
productsRouter.get(
  '/:cityId',
  expressAsyncHandler(async (req, res) => {
    try {
      const products = await Products.find({ citiesId: req.params.cityId })
      res.status(200).json(products)
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = productsRouter
