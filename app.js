// TIME //


//function time(seconds){
//    let timeMinutes = Math.floor(seconds / 60)
//    let timeSeconds = seconds % 60
//    if(timeMinutes.toString().length === 1){
//        timeMinutes = '0' + timeMinutes
//    }
//    return timeMinutes + ':' + timeSeconds
//}
//console.log(time(500))




// When doing sums & trynna get the biggest (smallest ? ) we always use a new variable. But on the second option, we use the same name, just different number 


//function diego (num1){

//   let sum = 0; 
//   for (let i = 0; i <num1.length; ++i){
//       sum = sum + num1[0];
//    }
//   return sum;
    
//   }
    
//   console.log(diego([,2,4,4,2,6]))


// SHIT TEST, IN THEIR DNA, MAN. YOU GOTTA KNOW THEY ARE ALWAYS TESTING YOU, PLEASE, PLEASE DONT FAIL THEM OR AT LEAST BE AWARE OF THEM.    
// You are failing all of them, u r supposed to past those little tests. tienes que ser unmune, literalmente, menos emocional 
    



// MONEY, I LOVE YOU SO MUCH, MAN, IM SORRY FOR LEAVING YOU. YOU KNOW I WAS TRYING TO GET EVEN MORE OF YOU BUT I DIDNT KNOW HOW TO MAKE THAT WISH BETTER, THEREFORE I ENDED UP TAKING REALLY BAD DECISIONS, MONETEARALY SPEAKING.
// I STILL THANK YOU A LOT THO BECAUSE SOMEHOW I ALWAYS FIND A WAY BUT WITH THE SAME RESULTS, I WANNA KEEP YOU AROUND FOREVER, UNTIL MY WHOLE BLOODLINE DISAPEARS, BUT HOW CAN I MAKE THIS A REALITY ? 
// MENTORS ALWAYS START OFF BY SAYING, "THANK THE MONEY THAT YOU USE BECAUSE IT GOES WHERE IT NEEDS TO BE" SOMETHING LIKE THAT. BUT ANYWAYS, HOW?
// Being THANKFUL, FEEL HOW U USED TO FEEL... GOING TO WORK, EVERYDAY, EVEN THO YOU HATED IT YOU STILL DID... AND YOU WERE GOING TO SCHOOL AND YOU HAD A GIRL!! YOU WERE DOING EVERYTHING, ONLY IF..
// I COULD START OFF FROM THERE BUT WITH ALL MY IMPROVEMENTS AND LESSONS THAT I HAVE TODAY.
// SO I AND MONEY COULD FORMALLY GENERATE REAL WHEALTH.
// YOU NEED A PLAN..



// GRACIAS DINERO :) . Everytime you use it, no matter on what, be thankful.

// Start making better decisions, first for yourself and then the group around you



//This is how you loop every character in the string. 

function array(arr){
return arr.split('')

}
console.log(array('diego'))

// Foor loops 

let str = ('Frontend Simplified')

for (let i = 0; i < str.length; ++i){

if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i} frontend simplified`)
}
else if (i % 3 === 0){
    console.log(`${i} frontend`)
}
else if (i % 5 === 0){
    console.log(`${i} -- > simplified`)
}
else {
    console.log(`${i} --> ${i}`)
}

}

let money = [20,30,40,50]

money.push(200)

console.log(money);


// Thanks for everything, I wanna be the whole package, not just the normal one. EVERY THING... Like Ronaldo, I wanna become that guy, I need to excell that energy. Need to focus on my voice volume, think before speaking & improving even more my physic... Tired of these niggas downplaying my shit. I deserve it and Im going to get it. Amen. 


let arr = [30,40,50,200,300,80]
let newArr = arr.filter((element) => {
    if (element < 300){
        return true;
    }
})
console.log(newArr)