// Bananas 

function str (arr){
    for(let i = 0; i < arr.length; ++i){
       if (arr[i] !== 'apple'){
        console.log(arr[i])
       }
    }
}

console.log(str(['apple' , 'orange' , 'banana']))