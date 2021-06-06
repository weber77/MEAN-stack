const express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan'); // middle ware to log request
var mongoose = require('mongoose');// package manager for mongodb
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

app.use(morgan("dev")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost:27017/tutorial', function(err){
    if(err){
        console.log("Not connected to the Database: " +err);
    }else{
        console.log("Successfully connected to DB");
    }
});


// app.get('/home', function(req, res){
//     res.send("hello world from home");
// })

app.listen(port, function(){
    console.log("Running server on "+ port+ "...");
});
