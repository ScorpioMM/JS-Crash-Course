//Theres two ways to unlock a backend data, both are important

const emailRef = document.querySelector(".email")

// 1. Then


fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
response.json().then((data) => {
    console.log(data)
})
})



// 2. Async Awaitttt


// async function main (){
// const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
// const data = await response.json()

// console.log(data);
// emailRef.innerHTML = data.email
// }

// main()