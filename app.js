const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")
function getSubcriptionStatus(){
    return new Promise ((resolve,reject) => {
setTimeout (() => {
    resolve ("undefined")
} , 2000);
    });
}


function getVideo (subscriptionStatus){

    return new Promise ((resolve, reject) => {
if (subscriptionStatus === "VIP") {
    resolve ("show video")
}
else if (subscriptionStatus === "FREE"){
    resolve ("show trailer")
}
else {
    reject ("no video")
}
    })
}


async function main () {
const status = await getSubcriptionStatus ();
statusRef.innerHTML = status;
try {
    console.log(await getVideo(status))
}
catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
}

}

main (); 

// Promises can only accept resolve and reject & has the same formula as (() => {})