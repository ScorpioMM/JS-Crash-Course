function karim (elem1){
    let sum = 0;
    for (i = 0; i < elem1.length; ++i){
        sum = sum + elem1[i];
    }
    return sum;
}

console.log(karim([2,3,5]))