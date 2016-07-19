//========== Packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");

//========== Variables
var User = require('./models/user');
var app = express();
var port = 3000;
var db = '';
var projectPath = path.join(__dirname, '../');

//========== Index View
app.get('/', function (req, res) {
    res.sendFile(projectPath + 'www/index.html')
});

//========== Static Files
app.use('/app', express.static(projectPath + 'app'));
app.use('/libs', express.static(projectPath + 'www/libs'));
app.use('/js', express.static(projectPath + 'www/js'));
app.use('/style', express.static(projectPath + 'www/style'));

//==========
app.listen(port);
console.log('Listening to port ' + port + ' ...');