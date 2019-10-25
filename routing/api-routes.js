var tableData = require('../data/table-data');
var waitingListData = require('../data/waitinglist-data');

//the parameter "app" represents Express
module.exports = function (app) {
    //WHEN the request is made, these are directions to follow
    //get function displays json object tableData whenever at the url, /api/tables
    //...if the app tries to post to this url, run this function
    app.get('/api/tables', function (req, res) {
        //parameter is variable created above
        res.json(tableData);  
    })
    //if the app tries to get from this url, run this function
    app.get('/api/waitlist', function (req, res) {
        res.json(waitingListData);  
    })
    //post route will allow users make posts to api to create new reservations
    //response is marked true or false based on what array the information is pushed into
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
    
    //if the app tries to post to this url, run this function
    //clears data from waitlist and reservation list
    app.post('/api/clear', function(){
        tableData = [];
        waitingListData = [];

        console.log(tableData);
        console.log(waitingListData);
    })
}



  
