const { fork } = require('child_process');

const forked = fork('forkChild.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
  if(msg.counter==2) 
    forked.kill()
});

forked.send({ hello: 'world' });
