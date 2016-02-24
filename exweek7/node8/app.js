// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Connect to mongoDB
mongoose.connect('mongodb://localhost/applicationDB');


// Applicant DB Schema
var applicationSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: {type: Array, default: []},
	years: Number,
	why: String
});

// Set Model(Collection) name
var Application = mongoose.model('Application', applicationSchema);



// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});


// displays a list of applicants
// app.get('/applicants', function(req, res){
// 	res.sendFile('html/applicants.html', {root : './public'});
// });


// creates an applicant
app.post('/api/applicants', function(req, res){
	// console.log(req.body);
	var applicant = new Application({
		name: req.body.name,
		bio: req.body.bio,
		skills: req.body.skills.split(', '),
		years: +req.body.years,
		why: req.body.why,
	})
	applicant.save(function(err, savedApplicant) {
		console.log("applicant error " + err)
		console.log("applicant save " + savedApplicant)
		res.send(savedApplicant);
	})
});

// grab all applicant data from DB and send back to angular controller


app.get('/api/applicants/', function(req, res) {
		console.log("no param")
		Application.find({}, function(err, docs) {
			res.send(docs)
		})
})


// displays list of applicants
app.get('/applicants', function(req, res) {
		res.sendFile('html/applicants.html', {root : './public'});
})

app.post('/api/applicants/remove', function(req, res) {
	Application.findOne({_id : req.body.appId}, function(err, foundApplicant) {
		Application.remove({_id : req.body.appId}, function(err, removeApplicant) {
			res.send(foundApplicant)
		})
	})
})

// individual applicant profile routes
app.get('/applicants/:userid', function(req, res) {
	console.log("express viewer page")
	console.log(req.params.userid)
	res.sendFile('html/profile.html', {root : './public'});
})

app.get('/api/applicants/:userid', function(req, res) {
		console.log("param", req.params.userid)
		Application.findOne({_id : req.params.userid}, function(err, userData) {
			console.log(userData)
			res.send(userData);
		})
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});


