## Catchy
### Browser-interface to your real time logs

Clone the Repository:
```
git clone <repo>
```

Install the required packages:
```
npm install
```

Start the server:
```
coffee modules/server.coffee <log_filename>
```

Check your logs real-time at:
```
firefox localhost:4000/
```

####Features:

* Dumps the file logs into the browser real-time using Tail and socket.io.
* Clear logs from the UI using `Clear Log` button or shortcut `g` or `G`.

####Todo:

* Thorough testing: unit and integration
* Make it a npm package
* Add colors to log
* Search functionality
* Support for multiplt sources of log files.
