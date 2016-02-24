var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');


// CONTROLLERS ~~~~~~
var vidCtrl = require('./controllers/videoController.js')

// EXPRESS APP OBJECT
var app = express();


// APPLICATION CONFIGURATION
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// ROUTES
app.get('/', function(req, res) {
	res.sendFile('index.html', { root: __dirname + '/public/html'})
})

// app.get('/api/videos', vidCtrl.getVideos)
app.push('/api/videos', vidCtrl.vidSubmit)


// LISTEN
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("We are listening to your thoughts on " + port)
})