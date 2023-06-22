// 2. Show examples of use of splice method to add and remove elements from array.
module.exports=()=>{
    var arr=[0,1,2,3,4,5]
    // console.log(arr)
    arr.splice(1,2) //deleting element at index 1 - 2
    // console.log(arr)
    arr.splice(1,0,1,2) // adding elements 1 - 2
    // console.log(arr)
    return arr;
}