var submissionModel = require('../models/submission.js')

var vidSubmit = function(req, res) {
	new submissionModel.videoCreator
	console.log("video submitted")
}

module.exports = {
	vidSubmit : vidSubmit
}