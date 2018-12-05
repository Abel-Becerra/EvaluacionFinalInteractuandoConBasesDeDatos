let goos = require('mongoose')
let schema = goos.Schema

var sch = new schema({
  id:{type:Number, required:true},
  title:{type:String, required:true},
  user:{type:String, required:true},
  startDate:{type:String, required:true},
  startTime:{type:String, required:true},
  endDate:{type:String},
  endTime:{type:String},
  isFullDay:{type:Boolean}
})

var e = goos.model('Event', sch)

module.exports = e
