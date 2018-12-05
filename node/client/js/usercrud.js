let model = require('./usermodel.js')

module.exports.insertarUsuarios = function(callback){
  let u = new model({
    email:"mdelacruz@northware.mx",
    password:"contraseña",
    nombre:"Manuel de la Cruz",
    fechanacimiento: '1980-09-30'
  })
  u.save((error)=>{
    if (error) callback(error)
  })
  u = new model({
    email:"angela@northware.mx",
    password:"contraseña",
    nombre:"Angela Martinez",
    fechanacimiento: '1992-04-15'
  })
  u.save((error)=>{
    if (error) callback(error)
  })
  u = new model({
    email:"picopollo@goo.so",
    password:"contraseña",
    nombre:"Un Pollo",
    fechanacimiento: '2012-11-23'
  })
  u.save((error)=>{
    if (error) callback(error)
  })
  callback(null, "Rgistro guardado")
}
