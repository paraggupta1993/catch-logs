{app, server} = require('../app');
Tail          = require('tail').Tail
io            = require('socket.io')(server);

main = ()->
  fileToTail    = process.argv[2]
  lineSeparator = "\n"
  fromBeginning = false
  watchOptions  = {}  #as per node fs.watch documentations

  tail = new Tail(fileToTail, lineSeparator, watchOptions,fromBeginning)

  io.on 'connection', (socket) ->
    console.log('a user connected');
    socket.emit 'new-data',
        channel: 'stdout'
        value: "tail file #{fileToTail}"

  tail.on 'line', (data) ->
    console.log data
    io.emit 'new-data',
      channel: 'stdout'
      value: data

main()
