let str = (`welcome To FES Karim`) 
for (i = 0; i < 21 ; i++){
if(i % 3 === 0 & i % 5 ===0) {
    console.log(`${i} -> Frontend Simplified`)
}   

else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`)
}

else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`)
}

else {
    console.log(`${i} -> ${i}`)
}


}