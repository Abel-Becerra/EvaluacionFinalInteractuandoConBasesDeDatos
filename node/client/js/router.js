let model = require('./usermodel.js')
const Router = require('express').Router()

Router.post('/login', function(req, res){
  let email = req.query.user, pwd = req.query.pass
  model.findOne({email: email, password: pwd}).exec(function(err, doc){
      if (err) {
          res.status(500)
          res.json(err)
      }
      res.json("Validado")
  })
});

module.exports = Router
