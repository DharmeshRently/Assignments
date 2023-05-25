let date= new Date();
console.log(date) //utc
console.log(date.toString()) //ist

let time_stamp=Date.now();
console.log(time_stamp,"  ",new Date(time_stamp))
var temp=time_stamp+10000;
console.log(time_stamp,"  ",new Date(temp))