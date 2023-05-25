var fs = require("fs");  
console.log("start");  
fs.stat('file.txt', function (err, stats) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log(stats);  
   console.log("Got file info successfully!"); 
   console.log("isFile ? " + stats.isFile());  
   console.log("isDirectory ? " + stats.isDirectory());   
   console.log(stats.atime.toString())  ; 
});  