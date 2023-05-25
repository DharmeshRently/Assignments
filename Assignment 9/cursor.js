const cur=require('robotjs')

setInterval(() => {
    var pos=cur.getMousePos();
    console.log(`x: ${pos.x}  y: ${pos.y}`)
}, 1000);