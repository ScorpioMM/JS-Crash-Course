function karim(arr) {
return arr.length
}

console.log(karim([5, 5, 6, 7]))

function diego (num1, num2){
    return num1 + num2
}

console.log(diego(5, 10))


let dogs = [20, 30, 40, 50, 60]

console.log(dogs); 

console.log(dogs.length)

dogs.push(300);

console.log(dogs)


let arr = [ 40, 50, 100] 

let newArr = arr.filter((element) => {
    if (element < 50) {
        return true;
    }
})

console.log(newArr)

let nigga = [50, 60]

let newNigga = nigga.map ((elem) => {
    console.log(elem) 
    return `SKEREEEE`;
})

console.log(newNigga)


let dollars = [1, 5, 7, 8]
let cents = []

for (let i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100)
}

console.log(cents)