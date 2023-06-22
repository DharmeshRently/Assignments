function f1(a){
    return new Promise((resolve)=>{resolve(a*10)})
}
function f2(a){
    return new Promise((resolve)=>{resolve(a+10)})
}
function f3(a){
    return new Promise((resolve)=>{resolve(a/10)})
}
function f4(a){
    console.log(a)
}
async function call(){
    var v1=await f1(10);
    var v2=await f2(v1)
    var v3=await f3(v2)
    f4(v3)
}
call()