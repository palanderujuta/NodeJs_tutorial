buf= new Buffer(20);

len=buf.write("Simply easy learning");
console.log(" written length : "+len);


console.log(buf.toString('utf8'));

console.log(buf.toJSON(buf));

var buf2=new Buffer('hello');
var buf3=Buffer.concat([buf,buf2]);
console.log(buf3.toString('utf8'));

if(buf.compare(buf2)<0)
{
	console.log("less");
}
else if(buf.compare(buf2) == 0)
{
	console.log("equal");
}
else
{
	console.log("more");
}


var buf4=new Buffer(3);
buf2.copy(buf4)
console.log("content is : "+buf4.toString());

var buf5=buf4.slice(0,1);
console.log(" : "+buf5.toString());