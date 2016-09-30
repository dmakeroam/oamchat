var io = require('socket.io').listen(9999)

var chatClients = []
var clientId = 0;

io.sockets.on('connection', function (socket) {
  const myid = clientId++;
  chatClients[socket.id] = myid
// 1
  socket.emit('broadcast', {msg: 'Hi', client: chatClients[socket.id]})
  socket.on('clientmsg', function (data) {
    console.log('Client said :' + data.msg)
    socket.broadcast.emit('broadcast', data)
  })
})

// unique id generator
function generateId () {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}
