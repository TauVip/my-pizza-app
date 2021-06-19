const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const SMSru = require('sms_ru')

const smsLoginRouter = express.Router()

smsLoginRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const sms = new SMSru(process.env.sms_ru_api)
      const code = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 10)
      ).join('')
      /*
      sms.sms_send(
        {
          to: req.body.userPhone.replace(/\D/g, ''),
          text: `${code} - код для входа на сайт dodopizza.kz. Никому не говорите код`
        },
        e => console.log(e.description)
      )
*/
      res.status(200).send({ code, userPhone: req.body.userPhone })
    } catch (e) {
      res.status(500).send({ error: e.message })
    }
  })
)

module.exports = smsLoginRouter
