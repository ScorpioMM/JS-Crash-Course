function weather (celsious) {
 let fahrenheit = celsious * 1.8 + 32
 return fahrenheit;
}

console.log(weather(50)); 


// shorter way 


function weathera (celsiouz) {
    return celsiouz * 1.8 + 32
}

console.log(weathera(30))


/// arrays 

let karim = [20, 30, 40, 50, 100] 

console.log(karim[0])

console.log(karim[karim.length - 1]) 

karim.push(100);

console.log(karim)


// arrays . filter

let grades = [`A+`,`A`, `FAIL`]

let goodGrades = grades.filter((element) => {
    if (element !== `FAIL`)
    return true;
})

console.log(goodGrades)


