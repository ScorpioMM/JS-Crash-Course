//function calcTime (seconds){
//let timerMinutes = Math.floor(seconds / 60);    
//let timerSeconds = seconds % 60;

//if(timerMinutes.toString().length === 1){
//timerMinutes = '0' + timerMinutes
//}

//return timerMinutes + ':' + timerSeconds;

//}

//console.log(calcTime(70))

// When doing sums & trynna get the biggest (smallest ? ) we always use a new variable. But on the second option, we use the same name, just different number 


function diego (elem1) {
   let sum = 0;
   for (let i = 0; i < elem1.length; ++i){
    if (sum + elem1[0]){
        sum = sum + elem1[0]
    }
   }
   return sum;
}
console.log(diego([3,3,3]))