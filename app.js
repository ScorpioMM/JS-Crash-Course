let grades = [`A+`, `A`, `FAIL`]

let gooGrades = []

for (i=0; i < grades.length; ++i){
    if (grades[i] !== `FAIL`)
    gooGrades.push(grades[i]);
}

console.log(gooGrades)


let arr = [20,30, 40,50, 100]

let newArr = arr.filter(element => element < 50)

console.log(newArr)




let dogs = [20, 30, 40, 90]

console.log(dogs[0])

console.log(dogs [dogs.length-1])

dogs.push(100);

console.log(dogs)