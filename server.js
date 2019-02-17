// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var http = require('http');



// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Process env.PORT kets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname,"app/public")));
app.use(express.static(path.join(__dirname,"app/routing")));



app.get('/', function(req,res){
res.render('app/public/home.html');
})
app.listen(PORT, function(){
  console.log('listening on port 8080');

});
