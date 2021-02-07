const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const Url = require('./models/url.js')
const randomStringGenerate = require('./randomStringGenerate.js')
require('./config/mongodb.js')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  Url.find()
    .lean()
    .then((urls) => {
      let short = randomStringGenerate(5)
      //避免短網址重複
      while (urls.some((url) => url.short === short)) {
        short = randomStringGenerate(5)
      }
      Url.create({
        id: 1,
        long: req.body.url,
        short: short
      })
        .then(() => {
          const HOST = 'http://localhost:3000/'
          const url = HOST + short
          res.render('result', { url })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})