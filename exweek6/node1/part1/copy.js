var fs = require('fs');
var sourceFile = process.argv[2];
var destinationFile = process.argv[3];
var originalText = fs.readFileSync(sourceFile, 'utf-8');

fs.writeFileSync(destinationFile, originalText);
