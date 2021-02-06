const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const HOST = 'http://localhost:3000/'
  const code = 'test'
  const url = HOST + code
  res.render('result', { url })
})

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})