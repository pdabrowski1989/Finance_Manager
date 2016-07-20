//========== Packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

//========== Variables
var app = express();
var router = express.Router();
var db = mongoose.connection;
var port = 3000;
var projectPath = path.join(__dirname, '../');

//========== Database
mongoose.connect('mongodb://localhost/testdb');
db.on('error', function () {
    console.log('Connection Error.')
});
db.once('open', function() {
   console.log('Connection Success.')
});

//========== Index View
app.get('/', function (req, res) {
    res.sendFile(projectPath + 'www/index.html')
});

//========== Routers
router.route('/user').post(function (req, res) {
    var user = new User();
    user.name = req.body.name;

    user.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Bear created!' });
    });
});

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