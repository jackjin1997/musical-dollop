const mongoose = require('mongoose')

const musicSchema = mongoose.Schema({
  title : { type:String, required : true },
  url : String,
  introduction : String,
  type: String,
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
})

const Music = module.exports = mongoose.model('Music',musicSchema)
