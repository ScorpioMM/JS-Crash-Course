let user = [{
username: `Karim` ,
email: `karim@gmail.com`,
password: `perro1213`,
subscriptionStatus: `VIP`,
discordID: `USKarim`,
lessonsCompleted: [0,1]
},
{
    username: `iphone` ,
    email: `phone@gmail.com`,
    password: `dog1213`,
    subscriptionStatus: `VIP`,
    discordID: `iphone`,
    lessonsCompleted: [0,1,2,3]
},
{
    username: `zen` ,
    email: `zen@gmail.com`,
    password: `zen`,
    subscriptionStatus: `VIP`,
    discordID: `zen`,
    lessonsCompleted: [0,1,2,3]
},
];
function login(email, password){
    for(i=0; i < user.length; ++i ) {
        if (user[i].email === email)
        console.log(user[i]);
    }
console.log(user[i]);
}

login(`karim@gmail.com` , `perro1213`);