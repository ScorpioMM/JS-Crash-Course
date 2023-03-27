function str (arr){
let reverse = ""
for(let i = 0; i < arr.length; ++i){
    reverse = arr[i] + reverse
}
return reverse
}

console.log(str('abc'))