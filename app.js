const emailRef = document.querySelector ("email")
fetch (("https://jsonplaceholder.typicode.com/users/1"))
.then ((response) => {
    return response.json ();
})

// 

let grades = ['A+' , 'A' , 'F']
let goodGrades = []

for (i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'F') 
goodGrades.push (grades[i]);
}

console.log(goodGrades)