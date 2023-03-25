function str (arr){
let sum = 0
for (let i = 1; i <= arr; ++i){
    sum = sum + i
}
return sum;
}

console.log(str([600]))