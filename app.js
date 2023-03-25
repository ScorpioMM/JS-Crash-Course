function str (arr){
let noApples = []
for (let i = 0; i < arr.length; ++i){
    if (arr[i] !== 'Apples'){
        noApples.push(arr[i])
    }
}
return noApples
}

console.log(str(['Banana' , 'Apples' , 'Orange']))