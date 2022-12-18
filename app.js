// first way
// Its always used with a hash and dots, haash when u got IDS and . when u got classes
// console.log(document.querySelector('h1'))

// Second way, no ID

// how to change the HTML on anything, used the method below, used += to ADD into the server

document.querySelector('.title').innerHTML = 'Frontend Simplified'

// change css, from color to font size. this document.querySelector helps u change anything. 

document.querySelector('.title').style.fontSize = '38px'

function clickme (){
    document.querySelector(".title").style.color = 'red'
    console.log('clicked')
}