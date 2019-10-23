var path = require('path');

//linking files
module.exports = function (app) {
    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });
    //use mthod sends users to the home page if they enter a different url than those provided
    app.use('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}