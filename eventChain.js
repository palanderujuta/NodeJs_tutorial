var events= require('events');
var eventEmitter = new events.EventEmitter();

var lis1 = function lis1(){
	console.log('lis 1 executed');
}

var lis2=function lis2(){
	console.log('lis 2 executed');
}

eventEmitter.addListener('connection',lis1);
eventEmitter.on('connection',lis2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " listeners listening to connection");


eventEmitter.emit('connection');

eventEmitter.removeListener('connection',lis1);
console.log("Listener1 will not listen now");

eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " listeners listening to connection");


console.log('Program ended');
