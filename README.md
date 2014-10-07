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

* Dumps the file into the browser real-time using socket.io.
* Clear logs from the UI using `Clear Log` button or shortcut `g` or `G`.
* Regex Search through the logs.
* AutoScroll to latest log.
* AutoClear logs whenever server restarts. Works great with nodemon.
* Take care of the terminal Ansi-Colors coming as part of the logs. Convert them to CSS colors.

####Todo:

* Make it a npm package.
* Thorough testing: unit and integration.
* User-define filters for coloring: Example = `Exception:` - Red like bootstrap.
* Make lines Collapsable.
* Optimize on search: (show and hide) logic.
* Case insensitive search option.
* Fuzzy Search option.
* Multiple sources of log files.
* Multi-language support.

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
