function reversedString (arr){
 let reversedString = '';
 for(let i = arr.length - 1; i >= 0 ; --i){
    reversedString = reversedString + arr[i]
 }
 return reversedString
}

console.log(reversedString('abc'))


function str (karim){
    let sum = 0;
    for (let i = 0; i < karim.length; ++i){
    sum = sum + karim[i]
    }
    return sum;
}

console.log(str([2,2,2]))



function strr (uskar){
return uskar.length
}


console.log(strr([1,1,1,1,1,1]))