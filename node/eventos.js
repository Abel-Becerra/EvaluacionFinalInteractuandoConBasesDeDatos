let url = "mongodb://localhost:27017/agenda",
    goose = require('mongoose'),
    operaciones = require('./client/js/eventos.js')

goose.connect(url)

operaciones.insertarEventos((error, result)=>{
  if(error) console.log(error)
  console.log(result)
})
