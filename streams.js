var fs= require("fs");
var data= '';

//Create a readable stream

var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk) {
	data=data+chunk;
});

readStream.on('end', function() {
	console.log(data);
});

readStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Program ended");

data='Simply easy learnign';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');

writerStream.end();


writerStream.on('finish', function() {
	console.log("completed");
});

writerStream.on('error', function(err) {
	console.log(err.stack);
});

console.log("Program ended");