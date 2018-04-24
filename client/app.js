var socket = io();
$(document).ready(function(){

$('form').submit(function () {
	event.preventDefault();
  var text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
});
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});