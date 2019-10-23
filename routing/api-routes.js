var tableData = require('../data/table-data');
var waitingListData = require('../data/waitinglist-data');

//the parameter "app" represents Express
module.exports = function (app) {
    //get function displays json object tableData whenever at the url, /api/tables
    app.get('/api/tables', function (req, res) {
        res.json(tableData);  //how does it know what table data is??
    })
    app.get('/api/waitlist', function (req, res) {
        res.json(waitingListData);  //how does it know what table data is??
    })
    //post route will allow users make posts to api to create new reservations
    app.post('/api/tables', function (req, res) {
        if(tableData.length < 5) {
            tableData.push(req.body);
            //boolean values set up to trigger message to users
            res.json(true);
        } else {
            waitingListData.push(req.body);
            res.json(false);
        }
    })
}



  
