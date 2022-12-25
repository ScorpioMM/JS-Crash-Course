// Functions lets you "show" what you wanna show on the website or console

function arr (username) {
    return username
}
console.log(`karim`)

// Theres two ways to do this ^^

const newArr = (password) => {
return password
}

console.log(`perro1213`)

// arrays lets u choose one (or more?) elements.

let array = [20, 30, 40, 50, 100] 
console.log(array[2])


// runs every element as truth.

let newArray = array.filter ((num1) => {
    console.log(num1)
})

// more arrays examples :) 

let dogs = [0, 1, 2, 3, 4, 5]
console.log(dogs[3])

console.log(dogs[dogs.length-1])

// push

dogs.push (555); 
console.log (dogs)

// more filters problems and ofc, solutions 

let arrNew = [20, 40, 50, 70,  60, 80] 


//let arrNewT = arrNew.filter ((element) => {
//    if (element < 50 ) {
  //      return true;
    // }
// })

// console.log(arrNewT) 

//Second and cleaner way to run this problem

let arrNewT = arrNew.filter (element => element < 50)
console.log(arrNewT)

