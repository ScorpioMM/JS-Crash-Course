// Bananas 

function str (arr){
    let noApples = []
    for(let i = 0; i < arr.length; ++i){
       if (arr[i] !== 'apple'){
        noApples.push(arr[i])
       }
    }
    return noApples;
}

console.log(str(['apple' , 'orange' , 'banana']))