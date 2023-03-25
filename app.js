function str (arr){
let str = ''
for (let i = 0; i < arr.length;++i){
    str = arr[i] + str
}
return str
}

console.log(str('abc'))