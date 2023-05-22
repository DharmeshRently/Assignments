function disp(n){
    console.log(n);
}

function add(a,b,callback){
    var sum
    sum=a+b
    callback(sum)
    console.log('after cb')
}

add(1,2,disp)