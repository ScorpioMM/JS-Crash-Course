function str (arr){
return arr.filter(elem => elem != 'apple')
}

console.log(str(['banana' , 'apple' , 'orange']))

// != IF ITS NOT!!!

// We create a function as normal, as soon as u read filter using the filter method should already to come your mind.

// We return, the str.filter (elem =>(IF) elem != 'banana' )