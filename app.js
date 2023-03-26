function str (arr){
let str = []
for (let i = 0; i < arr.length; ++i){
if (arr[i] !== 'Apples'){
    str.push(arr[i])
}
}
return str
}

console.log(str(['Apples', 'Guineos' , 'Peras']))