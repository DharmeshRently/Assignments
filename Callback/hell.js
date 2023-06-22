//+ * -

function f1(a,cb){
    if(a>10){
        cb(a*10,f3)
    }
    else(console.log('error 1'))
}

function f2(a,cb){
    if(a>200){
        cb(a+10,f4)
    }
    else(console.log('error 2'))
}

function f3(a,cb){
    if(a>10){
        cb(a-10)
    }
    else(console.log('error 3'))
    
}

function f4(a){
    if(a>10){
        console.log(a)
    }
    else(console.log('error 4'))
}

f1(50,f2)
