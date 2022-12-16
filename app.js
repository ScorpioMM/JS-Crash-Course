let users = [{
    username: "diego" ,
    email: "diego@gmail.com" ,
    password: "diego1213" ,
    status: "VIP" ,
    discordID: "011diego" ,
    lessonsCompleted: [0,1] ,
},
{
    username: "karim" ,
    email: "karim@gmail.com" ,
    password: "karim11" ,
    status: "VIP" ,
    discordID: "karim01" ,
    lessonsCompleted: [0,1] ,
},
{
    username: "diego" ,
    email: "diego@gmail.com" ,
    password: "diego1213" ,
    status: "VIP" ,
    discordID: "011diego" ,
    lessonsCompleted: [0,1] ,
}
]

function login (email, password) {

for (i = 0; i < users.length; i++) {
    if (users[i].email === email){
        if (users.passsword === password)

        console.log(`let the user in`)

        else {console.log(`wrong password`)}
        return;
    }
}

console.log(users[i])
}

login (`karim@gmail.com` , `karim11`)

// register 

function register (user){
    users.push(user)
}

register ({
    username: `zen`,
    email: "zen@gmail.com" ,
    password: "zen" ,
    status: "VIP" ,
    discordID: "01zen" ,
    lessonsCompleted: [0,1] ,
})

console.log(users);