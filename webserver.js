var express = require('express')
var app = express()
app.use('/', express.static(__dirname))

app.get('/', function (req, res) {
  res.redirect('./ioclient.html')
})

app.listen(4444, function () {
  console.log('Server start on: http://localhost:4444')
})
