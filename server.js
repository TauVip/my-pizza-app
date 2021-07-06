const express = require('express')
const citiesRouter = require('./routes/citiesRouter')
const smsLoginRouter = require('./routes/smsLoginRouter')
const usersRouter = require('./routes/usersRouter')
const articlesRouter = require('./routes/articlesRouter')
const pizzeriasRouter = require('./routes/pizzeriasRouter')
const bannersRouter = require('./routes/bannersRouter')

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

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

/*
Прописать Mongoose Schema Products Pizza
1. Список начинать со старых
{
  image,
  name,
  link,
  composition,
  price,
  buttonType,
}
*/
