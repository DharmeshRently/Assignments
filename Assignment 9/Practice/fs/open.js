const fs = require('fs');

fs.open('file.txt','r',(err, data) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(data.toString())
})
