let url = "mongodb://localhost:27017/agenda",
    goose = require('mongoose'),
    operaciones = require('./client/js/usercrud.js')

goose.connect(url)

operaciones.insertarUsuarios((error, result)=>{
  if(error) console.log(error)
  console.log(result)
})
