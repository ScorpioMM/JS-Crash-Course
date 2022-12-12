let dogs = [20,30,40,50,100]
console.log(dogs[0])

console.log(dogs[dogs.length-1])

dogs.push(300);
console.log(dogs)


// WE using arrays.filter now

let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element)=>{
    if (element < 50){
        return true;
    }
})
console.log(newArr)


let newKarim = [1,2,3,4,5,10]

let karim = newKarim.map ((element) => {
    console.log(element)
    return `doggie xd`;
})
console.log(karim)