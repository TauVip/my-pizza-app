const express = require('express')
const citiesRouter = require('./routes/citiesRouter')
const smsLoginRouter = require('./routes/smsLoginRouter')
const usersRouter = require('./routes/usersRouter')
const articlesRouter = require('./routes/articlesRouter')
const pizzeriasRouter = require('./routes/pizzeriasRouter')
const bannersRouter = require('./routes/bannersRouter')
const pizzasRouter = require('./routes/products/pizzasRouter')

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
app.use('/products/pizzas', pizzasRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

/*
{
    "images": {
        "traditional": {
          "small": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/aaeb4249-614e-4ba5-a5a9-5b51c41526ec.jpg",
          "medium": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/aa6bfef2-c2e8-4f43-89c2-4c6256beaa31.jpg",
          "big": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5e28fb64-d731-4bf8-b864-26ec1c56f1a8.jpg"
        },
        "thin": {
          "medium": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/39ffe4ad-b57c-4119-b46d-4d69a0bca209.jpg",
          "big": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/f0dceab1-b4dc-4761-9cf4-de585701afca.jpg"
        }
    },
    "name": "Кисло-сладкий цыпленок",
    "composition": [
        {
            "name": "Цыпленок",
            "canRemove": true
        },
        {
            "name": "томатный соус",
            "canRemove": false
        },
        {
            "name": "моцарелла",
            "canRemove": false
        },
        {
            "name": "кисло-сладкий соус",
            "canRemove": false
        }
    ],
    "price": {
        "small": 1450,
        "medium": 2000,
        "big": 0
    }
}
*/
