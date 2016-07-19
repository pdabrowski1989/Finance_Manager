//========== Packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//========== Variables
var app = express();
var router = express.Router();
var db = 'mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o';
var port = 3000;
var projectPath = path.join(__dirname, '../');

//========== Database

//========== Index View
app.get('/', function (req, res) {
    res.sendFile(projectPath + 'www/index.html')
});

//========== Models
var user = require(projectPath + 'server/models/user');

//========== Static Files
app.use('/app', express.static(projectPath + 'app'));
app.use('/libs', express.static(projectPath + 'www/libs'));
app.use('/js', express.static(projectPath + 'www/js'));
app.use('/style', express.static(projectPath + 'www/style'));

//========== Routers
app.use('/api', router);

//==========
app.listen(port);
console.log('Listening on port: ' + port + '.');