var lumin = function(r, g, b) {
var luminosity = r*.8 + ' ' + g*.8 + ' ' + b*.8;
console.log(luminosity);
};

module.exports = {
lumin :lumin(process.argv[2], process.argv[3], process.argv[4])
};
