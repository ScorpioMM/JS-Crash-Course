function lowToHigh (arr){
    
    return arr.sort((a, b) => a.price - b.price)
}

console.log(lowToHigh([
{id : 1, price: 50},
{
id : 2, price: 0
},
{
id : 3, price: 5000
}
  ]));

  {
    function str (arr){
       return arr.length;
    }
  }

  console.log(str([2,2,2]))

function str (arr) {
let str = ""
for(let i = 0; i < arr.length; ++i){
    str = arr[i] + str
}
return str;
}

console.log(str('abc'))