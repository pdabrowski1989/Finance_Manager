var express = require('express');
var mongoose = require('mongoose');

var User = require('./models/user');

var app = express();
var port = 3000;
var db = 'mongodb://mo1008_dbshare:eGhz7AStiq8ZzZOmTXY6@85.194.242.107:27017/mo1008_dbshare';

mongoose.connect(db, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + db + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + db);
    }
});

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(port);
console.log('Listening to port ' + port + ' ...');