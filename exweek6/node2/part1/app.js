// Requires \\
var fs = require('fs');
fs.readFile('./data.txt', function(err, data) {
        if(!err) {
		 app.get('/', function(req, res){
 		 res.header('Content-Type', 'text/html');
 		 res.sendFile('/Users/D/Documents/code/refactoru/projects/exweek6/node2/part1/data.txt');
})
}
})

var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
