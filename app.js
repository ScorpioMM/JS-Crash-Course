function str (arr){
let sum = 0;
for (let i = 0; i < arr.length; ++i){
 sum = sum + arr[i]
}
return sum;
}

console.log(str([2,2,2]))