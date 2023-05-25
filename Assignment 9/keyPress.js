const key=require('keypress')
key(process.stdin)
// process.stdin.setRawMode(true);
process.stdin.on('keypress',(ch,key)=>{
  if(key&&key.ctrl&&key.name==='c') 
    process.exit();
  console.log('   ',key.name)
})
