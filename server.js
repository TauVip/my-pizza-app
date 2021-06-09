const express = require('express')
const citiesRouter = require('./routes/citiesRouter')

require('dotenv').config()
require('./dbConnect')()

const app = express()

app.use(express.json())

app.use('/cities', citiesRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
