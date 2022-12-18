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

// 

let cash = 500  
let price = 200

    if (cash > price) {
        console.log(`${cash-price} change`)
    }

    else if (cash === price) {
        console.log(`let him in, thank you`)
    }

    else {console.log(`${price - cash} you need`)
     }

// login 

let  users = [{
username: `karim`,
email: `karim@gmail.com`,
password: `karim12` ,
subscriptionStatus: `VIP` ,
discordID: `karim01` , 
lessonsCompleted: [0, 1]
},
{
username: `karim`,
email: `karim@gmail.com`,
password: `karim12` ,
subscriptionStatus: `VIP` ,
discordID: `karim01` , 
lessonsCompleted: [0, 1]
} ,
{
username: `karim`,
email: `karim@gmail.com`,
password: `karim12` ,
subscriptionStatus: `VIP` ,
discordID: `karim01` , 
lessonsCompleted: [0, 1]
}
] 

function login (email,password) {
for (i=0; i < users.length; i++) {
    if (users[i].email === email) {
        if (users[i].password === password)
     console.log(`let him in`)   
    }
    else {console.log(`wrong password`)}        
        
return;

}

}

login (`karim@gmail.com` , `karim12`)


let register = {
    username: `zen`,
    email: `zen@gmail.com`,
    password: `ze1` ,
    subscriptionStatus: `VIP` ,
    discordID: `zen11` , 
    lessonsCompleted: [0, 3]
}


function register (user){
    users.push(user)
}




