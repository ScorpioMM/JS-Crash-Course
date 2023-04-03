// InnerHTMLLLL

const emailRef = document.querySelector(".email")

// 1. Then 

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
return response.json();    
}).then((data) => {
    console.log(data)
    emailRef.innerHTML = data.email
})

// 2. Await/Async 



// Sum 

function str (arr){
let sum = 0
for (let i = 0; i < arr.length; ++i){
sum += arr[i]
}
return sum;
}
console.log(str([2,2,2]))


// Proggresive sum
