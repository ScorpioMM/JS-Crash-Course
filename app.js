let cash=120
let price=120
let isStoreOpen=true


if(cash>price) {
    console.log(`Here's your change ${cash-price}`)
}

else if (cash===price) {
    console.log (`Ty`)
}

else {
    console.log(`Not enough, you need ${price-cash} more`)
}