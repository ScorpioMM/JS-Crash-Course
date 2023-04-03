async function firstSixIncomplete(userId){

const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

const result = await promise.json() 

const incompleteTask = result.filter(elem => !elem.completed).slice(0,6)

console.log(incompleteTask)

}

firstSixIncomplete(4)