// != IF ITS NOT!!!

// We create a function as normal, as soon as u read filter using the filter method should already to come your mind.

// We return, the str.filter (elem =>(IF) elem != 'banana' )

// If using => AND BRAKETS, you need to return...

// If not, its cool. 

function str (arr){
let noApples = []
for (let i = 0; i < arr.length; ++i){
    if (arr[i] !== 'apple'){
        noApples.push(arr[i])
    }
}
return noApples;
}

console.log(str(['apple' , 'banana' , 'pears'])) 