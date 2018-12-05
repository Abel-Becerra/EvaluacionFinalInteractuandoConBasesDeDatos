const http = require('http'),
      Routing = require('./client/js/router.js'),
      rt = require('./client/js/routevent.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = 8082
const app = express()

const Server = http.createServer(app)

mongoose.connect('mongodb://localhost/agenda')

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/', Routing)
app.use('/events', rt)

Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})
