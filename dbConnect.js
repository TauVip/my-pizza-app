const mongoose = require('mongoose')

module.exports = () =>
  mongoose
    .connect(process.env.MONGODB_URL, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))
