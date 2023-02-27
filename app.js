// Reversed String

function str (arr){
 return arr.split('').reverse().join('')
}
console.log(str('Karim'))


// Array into 0's

function strings (num1){
for (let i = 0; i < num1.length; ++i){
    num1[i] = 0
}
return num1; 
}

console.log(strings([12, 200])) 