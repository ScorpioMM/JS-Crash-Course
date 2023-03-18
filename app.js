function reversedString (arr){
 let reversedString = ''
 for (let i = arr.length - 1; i >= 0; --i){
   reversedString = reversedString + arr[i]
 }
return reversedString;
}

console.log(reversedString('abc'))