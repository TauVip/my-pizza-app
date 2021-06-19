const express = require('express')
const citiesRouter = require('./routes/citiesRouter')
const smsLoginRouter = require('./routes/smsLoginRouter')
const usersRouter = require('./routes/usersRouter')

require('dotenv').config()
require('./dbConnect')()

const app = express()

app.use(express.json())

app.use('/cities', citiesRouter)

app.use('/smslogin', smsLoginRouter)

app.use('/users', usersRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

//Страница не найдена
