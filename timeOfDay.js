const timeOfDay= new Date()
const hourNow=timeOfDay.getHours()
let greeting=""
if(hourNow>=03 && hourNow<=11){
    greeting="Good Morning"
}
if(hourNow>11 && hourNow<=16){
    greeting="Good Afternoon"
}
if(hourNow>16 && hourNow<=21){
    greeting="Good Evening"
}
console.log(greeting);
