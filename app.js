function str (elem1){
    let max = elem1[0]
    for (let i = 0; i < elem1.length; ++i){
        if(elem1[i] > max){
            max = elem1[i]
        }
    }
    return max;
}

console.log(str([5,100,200,500]))