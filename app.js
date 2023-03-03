function str (arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; ++i){
  if (arr[i] > max){
    max = arr[i]
  }
}
return max;
}
console.log(str([2,2,2,5, 100]))




function string (elem1, elem2) {
    return !elem1 ? elem1 : elem2
}

console.log(string(0,500))


function iphone (elem3){
    return elem3.length;
}

console.log(iphone([4,4,4,8,1,2,1]))