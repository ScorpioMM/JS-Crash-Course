// // 1. then

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     response.json().then ((data) => {
//         console.log(data)
//     })
// })

// function str (rating){
// let ratings = ""
// for (let i = 0; i < Math.floor(rating); ++i){
//     ratings += "*"
//     if (i !== Math.floor(rating) - 1){
//         ratings += " "
//     }
// }
//     if (!Number.isInteger(rating)){
//         ratings += " ."
//     }
// return ratings
// }

// console.log(str(3.5))


function sortToLowToHigh (numbers){
return numbers.sort((a, b) => a.price - b.price)

}

console.log(sortToLowToHigh([
    {
id : 1 , price: 50
    } , 
    {
        id : 2 , price: 200
    } , 
    {
        id : 3 , price: 40
    }
]))