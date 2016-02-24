var videoCreater = function(videoInfo) {
	this.name = videInfo.name
	this.url = videoInfo.url
	this.title = videoInfo.title
	this.description = videoInfo.description
}


module.exports = {
	videoCreator : videoCreator
}