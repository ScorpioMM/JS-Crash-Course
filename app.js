let users = [{
username: `Karim` ,
email: `karim@gmail.com` ,
password: `karim1213`,
subscriptionStatus: `VIP` , 
discordID: `001133` ,
lessonsCompleted: [0,1]
} ,
{
username: `Karim` ,
email: `karim@gmail.com` ,
password: `karim1213`,
subscriptionStatus: `VIP` , 
discordID: `001133` ,
lessonsCompleted: [0,1]
},
{
username: `Karim` ,
email: `karim@gmail.com` ,
password: `karim1213`,
subscriptionStatus: `VIP` , 
discordID: `001133` ,
lessonsCompleted: [0,1]
} ,

]

function login (email,password) {
    for (i = 0; i < users.length; ++i){
        if (users[i].email === email) {
            console.log(users[i])
        }
        if (users[i].password === password) {
            console.log(`Log in the user`)
        }
    else {console.log(`wrong password`)}
return;
 }

console.log(`couldnt find an email`)

}

login (`karim@gmail.com`)


// Register

function register (user){
    users.push(user);}

register({
    username: `diego`,
    email: `diego@gmail.com`,
    password: `diego1213`,
    subscriptionStatus: `VIP`,
    discordID: `0022` ,
    lessonsCompleted: [1,2]
})

console.log(users);

