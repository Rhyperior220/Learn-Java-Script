// 1. Display Current Day and Time

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : 
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Day Thing
let today = new Date()
let myDay = today.getDay().toLocaleString('en-IN')
let Daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Hour Thing
let hour = today.getHours() + 5
if (hour > 12) {
    hour = hour - 12;
}
// Minute Thing
let min = today.getMinutes() +30
if (min > 60){
    min = min - 60;
}
//Second Thing
let sec = today.getSeconds()

console.log(`Today is: ${Daylist[myDay]}.`)
console.log(`Current Time is : ${hour} PM : ${min} : ${sec} `)
