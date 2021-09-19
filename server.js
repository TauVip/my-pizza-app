const express = require('express')
const citiesRouter = require('./routes/citiesRouter')
const smsLoginRouter = require('./routes/smsLoginRouter')
const usersRouter = require('./routes/usersRouter')
const articlesRouter = require('./routes/articlesRouter')
const pizzeriasRouter = require('./routes/pizzeriasRouter')
const bannersRouter = require('./routes/bannersRouter')
const pizzasRouter = require('./routes/products/pizzasRouter')
const productsRouter = require('./routes/products/productsRouter')
const combosRouter = require('./routes/products/combosRouter')

require('dotenv').config()
require('./dbConnect')()

const app = express()

app.use(express.json())

app.use('/cities', citiesRouter)
app.use('/smslogin', smsLoginRouter)
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)
app.use('/pizzerias', pizzeriasRouter)
app.use('/banners', bannersRouter)
app.use('/pizzas', pizzasRouter)
app.use('/products', productsRouter)
app.use('/combos', combosRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

/*
  Подумать над переходами продуктов в Navigation и Home
  Что-то сделать с quantity
  Cart actions and reducers пересмотреть
  Очистить корзину при смене city
  Подарочные наборы в корзине
*/
