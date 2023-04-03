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



// Reverse words

function str (arr){
let str = []
for (let i = 0; i < arr.length; ++i){
    str = arr[i] + str
}
return str;    
}

console.log(str('abc'))