//nextTick
process.nextTick(() => {
  console.log('nextTick');
});//after the current loop

console.log("Start");

//poll:
const readStream = require('fs').createReadStream('./file.txt');
readStream.on('data', (chunk) => {
    //check
    setImmediate(() => {
    console.log('Check');
  });//
	console.log(chunk.toString());
});// after pending clbk'

// pending clbk':
setImmediate(() => {
    console.log("Pending callback");
}); //after timer phase

//timer phase:
setTimeout(function(){
	console.log("Timer");
}, 0);// after sync processes

console.log("End");
