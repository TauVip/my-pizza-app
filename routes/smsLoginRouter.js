const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const SMSru = require('sms_ru')

const smsLoginRouter = express.Router()

smsLoginRouter.post('/', expressAsyncHandler(async (req, res) => {
  try {
    const sms = new SMSru(process.env.sms_ru_api)
    const code = Math.round(Math.random() * 10000)
    sms.sms_send({
      to: req.body.userPhone,
      text: `${code}`
    }, e => console.log(e.description))

    res.status(200).send({...req.body, code})
  } catch(e) {
    res.status(500).send({error: e.message})
  }
}))

module.exports = smsLoginRouter
