var bodyParser = require('body-parser');
const express = require('express');
var path = require('path');

const app = express();
var PORT = process.env.PORT || 8080;
 
//initializing body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//include api routes first because those pull the data to display inside html pages
//pass in app variable (declared above) to function to use express
require('./routing/api-routes')(app);
//to include html route in server file 
require('./routing/html-routes')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})