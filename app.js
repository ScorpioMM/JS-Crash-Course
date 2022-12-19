// fetch ("https://jsonplaceholder.typicode.com/users/1"))

// THEN or we could use something called Await/Async

// THEN

fetch ("https://jsonplaceholder.typicode.com/users/1").then(response => {
console.log(response.json())
response.json().then(data => {
    console.log(data)
})
})