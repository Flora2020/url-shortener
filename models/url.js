const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true
  },
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