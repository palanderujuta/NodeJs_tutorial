var fs=require('fs');

fs.readFile('input.txt', function(err,data){


	if(err)
	{
		return console.error(err);
	}
	console.log("Asynchronous read : "+data);
});

var data=fs.readFileSync("input.txt");
console.log("Synchronous read : "+data.toString());
console.log("Program ended");

fs.open('input.txt', 'r+',function(err,data){


	if(err)
	{
		return console.error(err);
	}
	console.log("file opened successfully");
	fs.close(data, function(err){
 	if (err){
 		console.log(err);
 	}
 	console.log("File closed successfully.");
 });
});


console.log("File info:  ");
fs.stat('input.txt', function(err,data){


	if(err)
	{
		return console.error(err);
	}
	console.log("file stat : "+data);
	console.log("isFile?  "+data.isFile());
});



fs.writeFile('newinput.txt', 'Hello this is a new file', function(err){


	if(err)
	{
		return console.error(err);
	}
	console.log("Data written successfully");
	console.log("Let's read the file");

	fs.readFile('newinput.txt', function(err,data){


	if(err)
	{
		return console.error(err);
	}
	console.log("new ip Asynchronous read : "+data);


});
});


console.log("delete a file");

fs.unlink('new.txt',function(err)
{
	if(err)
	{
		return console.error(err);
	}

	console.log("File deleted successfully");
});

