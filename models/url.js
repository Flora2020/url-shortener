const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  long: {
    type: String,
    require: true
  },
  short: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Url', urlSchema)