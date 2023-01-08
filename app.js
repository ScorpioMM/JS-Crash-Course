// When doing sums & trynna get the biggest (smallest ? ) we always use a new variable. But on the second option, we use the same name, just different number 
function time(seconds){
let timeMinutes = Math.floor(seconds / 60)
let timeSeconds = seconds % 60
if(timeMinutes.toString().length === 1){
    timeMinutes = '0' + timeMinutes
}
return timeMinutes + ':' + timeSeconds
}
console.log(time(500))
// You are failing all of them, u r supposed to past those little tests. tienes que ser unmune, literalmente, menos emocional 


// GRACIAS DINERO :) . Everytime you use it, no matter on what, be thankful.

// Start making better decisions, first for yourself and then the group around you, guide

// La del 1
function diego (num1){

let sum = 0; 
for (let i = 0; i <num1.length; ++i){
    sum = sum + num1[0];
}
return sum;

}

console.log(diego([,2,4,4,2,6]))
