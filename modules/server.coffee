{app, server} = require('../app');
Tail          = require('tail').Tail
io            = require('socket.io')(server);

main = ()->
  fileToTail    = process.argv[2]
  lineSeparator = "\n"
  fromBeginning = false
  watchOptions  = {}  #as per node fs.watch documentations

  tail = new Tail(fileToTail, lineSeparator, watchOptions,fromBeginning)

  tail.on 'line', (data) =>
    console.log data
    io.sockets.emit 'new-data',
      channel: 'stdout'
      value: data

  io.on 'connection', (socket) =>
    console.log('a user connected');

    socket.emit 'new-data',
      channel: 'stdout'
      value: "tail file #{fileToTail}"

    socket.on 'disconnect', ()->
      console.log('a user disconnected')
      socket.disconnect()

main()
