const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes/index.js')
require('./config/mongodb.js')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`express is listening on http://localhost:${PORT}`)
})