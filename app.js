let str = `Frontend Simplified` 
for (i = 0; i < str.length; ++i) {
if (i % 3 === 0 && i % 5 ===0) {
    console.log(`${i} --> FRONTEND SIMPLIFIED`)
}

else if (i % 3 === 0) {
    console.log(`${i} ---> Frontend`)
}

else if (i % 5 === 0) {
    console.log(`${i} ---> Simplified`)
}

else {console.log(`${i} --> ${i}`)}

}

