let model = require('./eventModel.js')

module.exports.insertarEventos = function(callback){
  let u = new model({
    id:1,
    title:"Meeting at Room Tough Guy",
    user:"mdelacruz@northware.mx",
    startDate:"2018-12-05",
    startTime: '10:00 AM',
    endDate:"2018-12-05",
    endTime: '16:00 PM',
    isFullDay:true
  })
  u.save((error)=>{
    if (error) callback(error)
  })
  let u1 = new model({
    id:2,
    title:"Meeting at Room Dynavox",
    user:"mdelacruz@northware.mx",
    startDate:"2018-12-14",
    startTime: '01:30 PM'
  })
  u1.save((error)=>{
    if (error) callback(error)
  })
  let u2 = new model({
    id:3,
    title:"Meeting at Room Dynavox",
    user:"angela@northware.mx",
    startDate:"2018-12-14",
    startTime: '01:30 PM'
  })
  u2.save((error)=>{
    if (error) callback(error)
  })
  callback(null, "Rgistro guardado")
}
