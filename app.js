const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hellor World')
})

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})