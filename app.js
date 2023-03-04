function str (arr){
let reversedString = ""
    for (let i = 0; i < arr.length; ++i){
reversedString = arr[i] + reversedString
}
return reversedString;
}

console.log(str('diego'))