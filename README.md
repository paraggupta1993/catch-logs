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
sec=0
while true; do echo $sec >> "<log_filename>"; sleep 1; sec=$(($sec + 1)); done
```

####Features:

* Dumps the file logs into the browser real-time using Tail and socket.io.
* Clear logs from the UI using `Clear Log` button or shortcut `g` or `G`.
* Regex Search through the logs.

####Todo:

* Apply current regex on new incoming logs.
* Detect multiple line of logs as One chunk based on indentation. Example : Json. And table-strip them accordingly. And then apply the filters. Idea: Just detect one white-space at the beginning of the line and put it in the previous basket, else make a new basket.
* Collapse the lines.
* Use Underscore.
* Make it a npm package
* Optimize on search/show and hide.
* Add sytactic-colors to log
* Thorough testing: unit and integration
* Case insensitive search option
* Multiple sources of log files.
* Pre-define filters for coloring: Example = `Exception:` - Red like bootstrap.
* Adding at the top

####Contributors:

[Parag Gupta](https://github.com/paraggupta1993)

#### Special Thanks to :
[Express]()
[Static-favicon]()
[Morgan]()
[Cookie-parser]()
[Body-parser]()
[Debug]()
[Jade]()
[Frontail](https://github.com/mthenw/frontail) : From which tail.js is borrowed.
[Stylus]()
[Socket.io]()
[Coffee-script]()
[CBuffer]()

