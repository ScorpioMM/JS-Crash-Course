function str (arr){
   let karim = []
    for (let i = 0; i < arr.length; ++i){
   if (karim > arr[i]){
karim = arr[i];
}
}
return karim
}
console.log(str([2,2,4,1]))