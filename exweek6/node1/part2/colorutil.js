var lumin = function(r, g, b) {
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
console.log(luminosity);
};

module.exports = {
lumin :lumin(process.argv[2], process.argv[3], process.argv[4])
};
