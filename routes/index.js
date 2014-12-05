var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Catch-Logs: The Real-Time Log analysis' });
});

module.exports = router;
