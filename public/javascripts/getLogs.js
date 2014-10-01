(function(){
  var PORT = 4000;
  var container = $('.container.logs');
  var regexContainer = $('#regex');
  var clearBtn = $('.clearLogBtn');
  var bodyElement = $('body')[0];
  var allVisible = true;
  var autoScroll = true;

  var bindEvents = function(){
    $('#autoScroll').click(function() {
      var $this = $(this);
      if ($this.is(':checked')) {
        autoScroll = true;
      } else {
        autoScroll = false;
      }
    });

    clearBtn.click(function(e){
      container.empty();
    });

    regexContainer.keyup(function(e){
      var searchVal = $(e.target).val();
      if(searchVal === '') {
        console.log('empty search');
        if(!allVisible){
          $('.log_line').show();
          allVisible = true;
        }
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
            allVisible = false;
          }
        });
      }
      if(e.stopPropagation) e.stopPropagation();   // Stops Bubbling up to Ancestor elements
    });
  };

  var handleKeyUp = function(key){
    switch(parseInt(key.which,10)){
      case 71:// Press 'g' or 'G' to clear the logs
      case 103:
        container.empty();
        break;
      default:
        break;
    }
  };

  var autoScrollToBottom = function(){
    bodyElement.scrollTop = bodyElement.scrollHeight;
  };

  // var isUserScrolled = function(){
  //   return bodyElement.scrollTop != bodyElement.scrollHeight;
  // };

  var addItem = function(data){
    // if(isUserScrolled()){
    //   autoScroll = false;
    // }
    var container = $('.container.logs');
    var newItem = $('<div class="log_line">' + data.value + '</div>');
    container.append(newItem);
    if(autoScroll)autoScrollToBottom();
  };

  var setupSocketListeners = function(socket){
    // Appends new-data into the container
    socket.on('new-data', addItem);
  };

  var main = function(socket){
    // Binding Events
    bindEvents();

    // Binding Shortcuts
    $(document).keyup(handleKeyUp);

    // Binding Socket Events
    setupSocketListeners(socket);
  };

  $(document).ready(function(){
    var socket = io.connect('http://localhost:'+PORT);
    container = $('.container.logs');
    regexContainer = $('#regex');
    clearBtn = $('.clearLogBtn');
    bodyElement = $('body')[0];
    main(socket);
  });
})();
