let model = require('./eventModel.js')

module.exports.insertarEventos = function(callback){
  let u = new model({
    id:1,
    title:"Meeting at Room Tough Guy",
    user:"mdelacruz@northware.mx",
    startDate:"2018-12-05",
    startTime: '10:00:00',
    endDate:"2018-12-05",
    endTime: '18:00:00',
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
    startTime: '11:00:00',
    endDate:"2018-12-14",
    endTime: '11:30:00',
    isFullDay:false
  })
  u1.save((error)=>{
    if (error) callback(error)
  })
  let u2 = new model({
    id:3,
    title:"Meeting at Room Dynavox",
    user:"angela@northware.mx",
    startDate:"2018-12-14",
    startTime: '13:30:00',
    endDate:"2018-12-14",
    endTime: '14:00:00',
    isFullDay:false
  })
  u2.save((error)=>{
    if (error) callback(error)
  })
  callback(null, "Rgistro guardado")
}
