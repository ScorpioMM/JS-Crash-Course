function str (arr){
return new Array (arr.length).fill(0);
}

console.log(str([4,4]))


// HARA YOGA

function str1 (elem1){
let sum = 0;
for (let i = 1; i <= elem1; ++i){
sum = sum + i
}
return sum;
}

console.log(str1([4]))