// 5. Write a function that takes object as input and prints all keys and values
// in a valid JSON format
module.exports=()=>{
    const details= {
        name:'Dharmesh',
        age:21
    }
    // console.log(JSON.stringify(details,null,4))
    return (JSON.stringify(details,null,4))
}
