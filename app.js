for (i=1; i>=20; i++) {
    if (i%3===0 && i%5===0) {
        console.log (`Frontend Simplified ${i}`)
    }
  else if (i%3===0) {
        console.log (`Frontend ${i}`)
    }
  else  if (i%5===0) {
        console.log (`Simplified ${i}`)
    }
else {
        console.log (`${i} -> ${i}`)
    }
}
 
/*



let cash=100
let price=100

if (cash>price) {
    console.log (`Change ${cash-price}`)
}

else if (cash===price) {
    console.log (`Lorem50`)
}

else {
    console.log (`not enough, you need ${price-cash} more`)
}


let money=200    
let moremoney=400
let isStoreOpen=true

let str = money>=moremoney && isStoreOpen ? `Yes` : `No`
console.log (str)


const perra = "UsKarim" 
for (i=0; i<perra.length; ++i){
    console.log(perra)
}


function WelcomeToFES (name) {
    WelcomeToFES (name)
} 

WelcomeToFES (`Karim`)

for (i=1; i>=20; i++) {
    if (i%3===0 && i%5===0) {
        console.log (`Frontend Simplified ${i}`)
    }
  else if (i%3===0) {
        console.log (`Frontend ${i}`)
    }
  else  if (i%5===0) {
        console.log (`Simplified ${i}`)
    }
else {
        console.log (`${i} -> ${i}`)
    }
}
 