var fs=require('fs')

setInterval(()=>{    
    // fs.readFileSync('file.txt',function(err,data){
    //     if(err) console.log(err)
    //     console.log(data.toString());
    // }
    // )
    console.log(fs.readFileSync('file.txt').toString())
},1000)
