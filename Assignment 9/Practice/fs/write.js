var fs = require("fs");

setInterval(()=>{
    console.log('updating...');
    let date=new Date()
    fs.writeFileSync('file.txt', date.toString(), function(err) {
    if (err) {
        return console.error(err);
    }
    });
},1000)
