// fetch ("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email")
console.log(emailRef)
// THEN or we could use something called Await/Async

// THEN

fetch ("https://jsonplaceholder.typicode.com/users/1").then(response => {
response.json().then(data => {
    console.log(data)
    emailRef.innerHTML = data.email;
})
})