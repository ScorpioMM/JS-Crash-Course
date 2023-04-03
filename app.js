// InnerHTMLLLL

const emailRef = document.querySelector(".email")

// 1. Unlocking a promise by using Then; 

// fetch("https://jsonplaceholder.typicode.com/users/1").then((data) => {
// return data.json();
// }).then((data) => {
// console.log(data)
// emailRef.innerHTML = data.email    
// })

// 2. Unlock a promise by using await / async method, this what you do;

async function main (){
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
const data = await response.json()
console.log(data);
emailRef.innerHTML = data.email    
}

main()

// async function main(){
 
// const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
// const data = await response.json()
// console.log(data)
// emailRef.innerHTML = data.email
// }

// main()











// // Reverse words

// function str (arr){
// let str = []
// for (let i = 0; i < arr.length; ++i){
//     str = arr[i] + str
// }
// return str;    
// }

// console.log(str('abc'))