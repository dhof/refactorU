var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


// CONTROLLERS ~~~~~~


// EXPRESS APP OBJECT
var app = express();


// APPLICATION CONFIGURATION
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + './public'));


// ROUTES
app.get('/', function(req, res) {
	res.sendFile('index.html', { root: './public/html/'})
})


// LISTEN
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("We are listening to your thoughts on " + port)
})