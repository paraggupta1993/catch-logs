(function(){
  var PORT = 4000;

  App = function(socket){
    return {
      socket: socket,
      container: $('.container.logs'),
      regexContainer: $('#regex'),
      clearBtn: $('.clearLogBtn'),
      bodyElement: $('body')[0],
      allVisible: true,
      autoScroll: true,

      bindEvents: function(){
        $('#autoScroll').click(function() {
          var $this = $(this);
          if ($this.is(':checked')) {
            this.autoScroll = true;
          } else {
            this.autoScroll = false;
          }
        });

        this.clearBtn.click(function(e){
          this.container.empty();
        });

        this.regexContainer.keyup(function(e){
          var searchVal = $(e.target).val();
          if(searchVal === '') {
            console.log('empty search');
            if(!this.allVisible){
              $('.log_line').show(); //OPTIMIZE
              this.allVisible = true;
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
                this.allVisible = false;
              }
            });
          }
          if(e.stopPropagation) e.stopPropagation();   // Stops Bubbling up to Ancestor elements
        });
      },
      handleKeyUp: function(key){
        switch(parseInt(key.which,10)){
          case 71:// Press 'g' or 'G' to clear the logs
          case 103:
            this.container.empty();
            break;
          default:
            break;
        }
      },
      autoScrollToBottom: function(){
        this.bodyElement.scrollTop = this.bodyElement.scrollHeight;
      },
      addItem: function(data){
        if(data.value[0] == ' '){
          this.lastItem.text(this.lastItem.text() + '\n' + data.value);
        }
        else{
          newItem = $('<div class="log_line">' + data.value + '</div>');
          this.lastItem = newItem.appendTo(this.container);
        }
        if(this.autoScroll) this.autoScrollToBottom();
      },
      setupSocketListeners: function(socket){
        // Appends new-data into the container
        socket.on('new-data', this.addItem);
      },
      main: function(){
        // Binding Events
        this.bindEvents();

        // Binding Shortcuts
        $(document).keyup(this.handleKeyUp);

        // Binding Socket Events
        this.setupSocketListeners(this.socket);
        this.lastItem = $('<div class="log_line"></div>').appendTo(this.container);
      }
    };
  };

  $(document).ready(function(){
    var socket = io.connect('http://localhost:'+PORT);
    myapp = new App(socket);
    _.bindAll(myapp, 'addItem', 'autoScrollToBottom', 'handleKeyUp');
    myapp.main();
  });
})();
