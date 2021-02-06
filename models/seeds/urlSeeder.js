const urls = require('./urlSeeds.js')
const Url = require('../url.js')
const db = require('../../config/mongodb.js')

console.log(urls)
db.once('open', () => {
  Url.insertMany(urls)
    .then(() => {
      console.log('done!')
      db.close()
    })
    .catch(error => console.log(error))
})