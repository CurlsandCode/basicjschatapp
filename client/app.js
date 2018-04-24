var socket = io();

$('form').submit(function (e) {
	e.preventDefault();
  var text = $('#message').val();
  var name = $('#initials').val();
  socket.emit('message', name + ' says: ' + text);
  $('#message').val('');
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});