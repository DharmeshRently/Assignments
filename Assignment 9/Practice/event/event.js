var events = require('events');
const { listeners } = require('process');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

var event2=()=>{
    console.log('event 2')
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
// eventEmitter.addListener('event2',(myEventHandler,event2))
eventEmitter.on('event2',event2)
// eventEmitter.on('event3',event2)
//Fire the 'scream' event:
eventEmitter.setMaxListeners(2)

console.log(eventEmitter.listeners('event2'))

eventEmitter.emit('event2')
eventEmitter.emit('event2')
setTimeout(()=>{ eventEmitter.emit('scream');},1000)
eventEmitter.emit('event2')
