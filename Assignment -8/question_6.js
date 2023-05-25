// 6. Print all values of a nested obj

const details={
    name :"Dharmesh",
    age:21,
    detail:{
        name: "Ram",
        arr: [1,2,3]
    }
}

function printall(obj){
    for(let i in obj){
        if(typeof obj[i] ==='object'&&obj[i]!==null)
            printall(obj[i]);
        else   
            console.log(obj[i])
    }
}

printall(details);
