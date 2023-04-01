//Theres two ways to unlock a backend data, both are important

const emailRef = document.querySelector(".email")
console.log(emailRef)
// 1. Then 

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
 return response.json()
}).then(data => {
    console.log(data);
    emailRef.innerHTML = data.email
})


// 2. Async Awaitttt