function str (arr){
return new Array (arr.length).fill(0);
}

console.log(str([4,4]))


//Improve your memory. Using sounds to re wire your brain


function str1 (elem1){
let sum = 0;
for (let i = 0; i < elem1.length; ++i){
    sum = sum + elem1[i]
}
return sum;
}

console.log(str1([2,2,2,2]))