const express = require('express')

const Url = require('../models/url.js')
const randomStringGenerate = require('../randomStringGenerate.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:short', (req, res) => {
  const short = req.params.short
  Url.find({ short: short })
    .lean()
    .then((url) => {
      res.status(301).redirect(url[0].long)
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  Url.find()
    .lean()
    .then((urls) => {
      let short = randomStringGenerate(5)
      //避免短網址重複
      while (urls.some((url) => url.short === short)) {
        short = randomStringGenerate(5)
      }
      Url.create({
        long: req.body.url,
        short: short
      })
        .then(() => {
          let HOST = ''
          if (process.env.MONGODB_URI) {
            HOST = 'https://nameless-fjord-14350.herokuapp.com/'
          } else {
            HOST = 'http://localhost:3000/'
          }
          const url = HOST + short
          res.render('result', { url })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router