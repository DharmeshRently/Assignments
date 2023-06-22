var promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("done")},1000)
})
console.log('on start',promise)
promise.then(
    (value)=>{console.log(value)},
    (error)=>{console.log(error)}
);
promise.finally(()=>console.log('finally'))
setTimeout(()=>{console.log('on end',promise)},1500)
