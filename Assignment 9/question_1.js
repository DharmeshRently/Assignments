// 1. Write a program that takes a date and prints the day on which the date falls on. 1

module.exports=()=>{
    var date=new Date()
    var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    // console.log(day[date.getDay()])
    return day[date.getDay()];
}
