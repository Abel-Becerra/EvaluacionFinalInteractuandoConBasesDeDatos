let model = require('./eventModel.js')
const Router = require('express').Router()

Router.get('/all', function(req, res){
  let email = req.query.user
  model.find({user: email})//.select({"id":"$id", "title": "$title", "isFullDay": "$isFullDay", "startDate": "$startDate"})
  .exec(function(err, doc){
      if (err) {
          res.status(500)
          res.json(err)
      }
      res.json(doc)
  })
});

Router.post('/new', function(req, res){
  var ev = new model({
        id: Math.floor(Math.random() * 500),
        title: req.body.title,
        user:req.body.user,
        isFullDay:req.body.isFullDay,
        startDate:req.body.start.indexOf('T') > -1 ? req.body.start.split('T')[0] : req.body.start,
        startTime: req.body.start.indexOf('T') > -1 ? req.body.start.split('T')[1] : '',
        endDate:req.body.end == '' ? '' : req.body.end.split('T')[0],
        endTime:req.body.end == '' ? '' : req.body.end.split('T')[1]
    })
    console.log(ev)
    ev.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
});

Router.post('/delete/:id', function(req, res) {
    let uid = req.params.id
    model.remove({id: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

Router.post('/update', function(req, res) {
    let uid = req.params.id
    model.save({id: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

module.exports = Router
