let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => {
console.log(element)
return true;
})


arr.push(400);

console.log(arr)