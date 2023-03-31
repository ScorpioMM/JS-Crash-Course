function lowToHigh (arr){
    
    return arr.sort((a, b) => a - b)
}

console.log(lowToHigh([20,50,100,40]))