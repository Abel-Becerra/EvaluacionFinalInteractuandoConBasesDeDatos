let goos = require('mongoose')
let schema = goos.Schema

var usch = new schema({
  email:{type:String, required:true},
  password:{type:String, required:true},
  nombre:{type:String, required:true},
  fechanacimiento:{type:String, required:true}
})

var u = goos.model('User', usch)

module.exports = u
