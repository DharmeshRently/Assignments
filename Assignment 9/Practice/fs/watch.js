const fs = require('fs');

fs.watch('file.txt',(eventType,fileName)=>{
    console.log(eventType)
})
