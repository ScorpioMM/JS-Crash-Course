function getSubscriptionStatus () {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("VIP")
        
    }, 2000);
})

}

// .then
getSubscriptionStatus().then (response => console.log(response))


// async and await 
async function main() {
    console.log( await getSubscriptionStatus());

}

main(); 