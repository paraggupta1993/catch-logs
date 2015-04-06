## Catch-Logs
### Browser-interface to your real time logs

Clone the Repository:
```
git clone <repo>
```

[Install Node.js](http://nodejs.org/download/) if you dont have it.

Go into the application:
```
cd catch-logs
```

Install the required packages: (Npm comes with Node.js)
```
npm install
```

Configure the log filename which you want to watch (Make changes in `config.json`):
```
{
  "log_filename": "Your filename goes here"
}
```

Start the server:
```
npm start
```


Analyse your logs real-time at:
```
firefox localhost:4000/
```


#### Development :

Better start the server with nodemon, so that server automatically restart if any changes are made to the source files.
```
nodemon modules/server.coffee
```

#### Testing :
Logger : Use this command in different tab for testing
```
sec=0
while true; do echo $sec >> "<log_filename>"; sleep 1; sec=$(($sec + 1)); done
```

###Features:

* Dumps the file into the browser real-time using socket.io.
* Clear logs from the UI using `Clear Log` button or shortcut `g` or `G`.
* Regex Search through the logs.
* AutoScroll to latest log.
* AutoClear logs whenever server restarts. Works great with nodemon.
* Take care of the terminal Ansi-Colors coming as part of the logs. Convert them to CSS colors.

###Todo:

* User-define filters for coloring: Example = `Exception:` - Red like bootstrap.
* Make lines Collapsable.
* Case insensitive search option.
* Optimize on search: (show and hide) logic.
* Thorough testing: unit and integration.
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
[Frontail](https://github.com/mthenw/frontail)
[Stylus]()
[Socket.io]()
[Coffee-script]()
[CBuffer]()
