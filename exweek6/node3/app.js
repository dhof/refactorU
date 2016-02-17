var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(logger('dev'));
// app.use(express.static(__dirname + './public'))

app.get('/', function(req, res) {
	res.sendFile('index.html', {root : './'})
});

app.get('/success', function(req, res) {
	res.send('Success!!')
})


// app.get('/post?email=test%40test.com', function(req, res) {
// 	res.send('Success!')
// })


app.post('/formsubmit', function(req, res) {
	res.redirect('/success')
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("I'm running on " + port + "!")
});