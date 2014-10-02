{app, server} = require('../app');
tail          = require('./tail');
io            = require('socket.io')(server);

main = ()->
  fileToTail    = process.argv[2]

  tailer = tail(fileToTail);

  # Broadcast a line to all listeners
  tailer.on 'line', (data) =>
    console.log data
    io.sockets.emit 'new-data',
      channel: 'stdout'
      value: data

  # Accept a connection
  io.on 'connection', (socket) =>
    console.log('a user connected');

    socket.emit 'filename',
      channel: 'stdout'
      value: "#{fileToTail}"

    tailer.getBuffer().forEach (line)->
      socket.emit('new-data', line);

    socket.on 'disconnect', ()->
      console.log('a user disconnected')
      socket.disconnect()

main()
