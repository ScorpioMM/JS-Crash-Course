// fetch ("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email")
// THEN or we could use something called Await/Async

// THEN

//fetch (("https://jsonplaceholder.typicode.com/users/1"))
//.then((response) => {
  //  return response.json();
//})
//.then ((data) => {
//console.log(data);
//emailRef.innerHTML = data.email
// });

// AWAIT AND ASYNC
async function main () {
 const response =   await fetch ("https://jsonplaceholder.typicode.com/users/1")
 const data = await response.json()
console.log(data)
emailRef.innerHTML = data.email
}

main ()