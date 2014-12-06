{app, server} = require('../app');
tail          = require('./tail');
io            = require('socket.io')(server);
config        = require('../config.json')

getFileToTail = () ->
  if(config.log_filename is undefined or config.log_filename is "")
    console.log("####################\nMessage: Kindly, put your log filename which you want to monitor in config.json file.\n####################\n");
    process.exit(0);

  return config.log_filename

main = ()->
  fileToTail = getFileToTail();
  tailer = tail(fileToTail);

  # Broadcast a line to all listeners
  tailer.on 'line', (data) =>
    console.log data
    io.sockets.emit 'new-data',
      channel: 'stdout'
      value: data

  # Accept a connection
  io.on 'connection', (socket) =>
    console.log('A client connected');

    socket.emit 'filename',
      channel: 'stdout'
      value: "#{fileToTail}"

    tailer.getBuffer().forEach (line)->
      socket.emit('new-data', line);

    socket.on 'disconnect', ()->
      console.log('A client disconnected')
      socket.disconnect()

main()
