console.log(__filename);

console.log(__dirname);

function printHello(){
 console.log( "Hello, World!");
}
// Now call above function after 2 seconds
//setInterval(printHello, 1000);

// Print the current directory
console.log('Current directory: ' + process.cwd());
// Print the process version
console.log('Current version: ' + process.version);

console.log(process.memoryUsage());


