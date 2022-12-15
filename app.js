let users = [{
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
    for(i=0; i < users.length; ++i ) {
        if (users[i].email === email){
            console.log(users[i]);

            if (users[i].password === password) {
                console.log(`Log the user in - the details are correct`)
            }
            
                else {
                    console.log(`password is incorrect`)
                }
                return;
        }
    }
    console.log(`couldnt find an email that matches`)
}

login(`karim@gmail.com` , `wrong`);

// Register functions 



function register (
    username, 
    email, 
    password, 
    subscriptionStatus, 
    discordID,
    lessonsCompleted){
        let user = {
username: username,
email: email,
password: password,
subscriptionStatus: subscriptionStatus,
discordID: discordID,
lessonsCompleted: lessonsCompleted,
}
users.push(user);
    }

register(`zen`,
`zen@gmail.com` ,
 `hello`, 
 `VIP` , 
 `001`, 
 `0,1`
 );

 console.log(users); 