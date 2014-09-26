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

Start the server: [Production]
```
coffee modules/server.coffee <log_filename>
```

Start the server: [Development]
Better start it with nodemon
```
nodemon modules/server.coffee <log_filename>
```

Check your logs real-time at:
```
firefox localhost:4000/
```

Logger for testing : Use this command in different tab for testing
```
while true; do echo $sec >> "<log_filename>"; sleep 1; sec=$(($sec + 1)); done
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
* Auto-Scroll
* Adding at the top

#### Known Bugs:

* Indentation not preserved of the logs.

####Contributors:

[Parag Gupta](https://github.com/paraggupta1993)

#### Special Thanks to :
[Frontail](https://github.com/mthenw/frontail) : From which tail.js is borrowed.
