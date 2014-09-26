(function(){
  var PORT = 4000;
  var terminateEvent = function(event){
    if(event.stopPropagation)
      event.stopPropagation();   // Stops Bubbling up to Ancestor elements
    if(event.preventDefault)
      event.preventDefault();    // Stops the default action Eg : Redirecting to a "href" for anchor element
    return false;
  };

  var bindEvents = function(){
    $('.clearLogBtn').click(function(e){
      $('.container.logs').empty();
    });

    $('#regex').keyup(function(e){
      var searchVal = $(e.target).val();
      if(searchVal == '') {
        console.log('empty search');
        $('.log_line').show();
      }
      else {
        re = new RegExp(searchVal);
        $('.log_line').each(function(index, log){
          match = re.exec(log.innerHTML);
          if(match){
            //Add divs to make the matched part of different color
            //console.log(match.index + match.length);
            $(log).show();
          }
          else{
            $(log).hide();
          }
        });
      }
      if(e.stopPropagation) e.stopPropagation();   // Stops Bubbling up to Ancestor elements
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
      var newItem = $('<div class="log_line">' + data.value + '</div>');
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
