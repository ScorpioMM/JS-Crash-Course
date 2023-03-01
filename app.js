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

// Arrys to 0's

function wtv (newarr){
    return new Array(newarr.length).fill(0)
}

console.log(wtv([12,12323,23212,4]))

// Maps

function dotmap(ArrE){
return ArrE.map(elem => {
return 'karim'
})
}

console.log(dotmap([1,2,23,1]))

// Filter out all the apples

// !== MEANS IT'S NOT!!!

function smartnigga(money){
let intelectual = []
    for (let i =0; i < money.length; ++i){
if (money[i] !== 'apples'){
    intelectual.push(money[i])
}
    }
    return intelectual

}

console.log(smartnigga(['banana' , 'apples' , 'money' , 'genius']))


// Thnaks because im smart

// Los Diablooh