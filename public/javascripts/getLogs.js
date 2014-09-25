(function(){
  var PORT = 4000;

  var bindEvents = function(){
    $('.clearLogBtn').click(function(e){
      $('.container.logs').empty();
    });
  };

  var handleKeyDown = function(key){
    switch(parseInt(key.which,10)){
      case 71:// Press 'g' or 'G' to clear the logs
      case 103:
        $('.container.logs').empty();
        break;
      default:
        break;
    }
  };

  var setupSocketListeners = function(socket){
    var container = $('.container.logs');

    // Appends new-data into the container
    socket.on('new-data', function(data){
      var newItem = $('<div>' + data.value + '</div>');
      container.append(newItem);
    });
  };

  var main = function(socket){
    // Binding Events
    bindEvents();

    // Binding Shortcuts
    $(document).keydown(handleKeyDown);

    // Binding Socket Events
    setupSocketListeners(socket);

  };

  $(document).ready(function(){
    var socket = io.connect('http://localhost:'+PORT);
    main(socket);
  });
})();
