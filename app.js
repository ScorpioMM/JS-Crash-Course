// Foor Loops

let diego = ('Frontend Simplified') 
for (let i = 0; i < diego.length; ++i){

    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} -- > FrontendSimplified`)
    }
else if ( i % 3 === 0){
    console.log(`${i} --> Frontend`)
}
else if ( i % 5 === 0){
    console.log(`${i} --> Simplified`)
}

else {
    console.log(`${i} --> ${i}`)
}
}

// Functions

function karim (num1, num2) {
    return num1 + num2
}

console.log(karim(10, 20))

//Arrays

let arr = ['A+' , 'A', 'F']
let arrNew = []
for (let i = 0; i < arr.length; ++i){
    if (arr[i] !== 'F')
    arrNew.push(arr[i]);

}

console.log(arrNew)

// 