const statusRef = document.querySelector('.status')

function subscription (){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('VIP')

    }, 2000)
})
}    

function getVideo(subscriptionStatus){
 return new Promise ((resolve, reject) => {
 if(subscriptionStatus === "VIP"){
    resolve ('Show Video')
 } 
 else if(subscriptionStatus === "FREE"){
    resolve('Show Trailer')
 } 
 else {reject('No Video')}
 })   
}

async function main (){
const status = await subscription();
statusRef.innerHTML = status
console.log(await getVideo(status))
}

main ()





