var PORT = 4000;

$(document).ready(function(){
  var socket = io.connect('http://localhost:'+PORT);
  var container = $('#container');

  socket.on('new-data', function(data){
    var newItem = $('<div>' + data.value + '</div>');
    container.append(newItem);
  });
});
