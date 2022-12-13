// Basic arrays 

let beats = [30,40,50,100]
console.log(beats[1])
console.log(beats[beats.length-1])
beats.push(3000);

console.log(beats)
// arrays.filter 

let arr = [40,50,60,70,80]

let newArr = arr.filter ((element) => {
if (element < 70)
return true;
})

console.log(newArr)

// arrays.filter short way 
let arrays = [20,40,50,60,100]
let newArrays = arrays.filter (element => element < 60)

console.log(newArrays)

// using .map (() => {})

let newKarim = [1,5,10]

let karim = newKarim.map ((element) => {
    console.log(element)
    return `newMoney`;
})
console.log(karim)

// strings

let youtube = 200
let subscription = 200

if (youtube < subscription) {
    console.log(`${youtube-subscription}`)
}
else if (youtube === subscription) {
    console.log(`thank you :)`)
}


// 

let cash = [1,5,10,3];

let cents = [];

for (i = 0; i < cash.length; ++i){
    cents.push(cash[i] * 100);
}

console.log(cents);

