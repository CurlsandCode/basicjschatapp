var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

var history = [];

io.on('connection', function (socket) {
  history.forEach(function (msg) {
    socket.emit('message', msg);
  });
  socket.on('message', function (msg) {
    history.push(msg);
    io.emit('message', msg);
  });
});

server.listen(process.env.PORT || 8080, function() {
  console.log('Chat server running');
});