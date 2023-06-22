// 6. Print all values of a nested obj


const details={
    name :"Dharmesh",
    age:21,
    detail:{
        name: "Ram"
    }
}
var ans=""
function printall(obj){
    for(let i in obj){
        if(typeof obj[i] ==='object'&&obj[i]!==null)
            printall(obj[i]);
        else   
            ans+=obj[i]+" "
    }
}

module.exports=()=>{
    printall(details);
    return ans;
}