let cash=6000
let price=100

if (cash>price){
console.log(`you paid extra, here's your ${cash-price} money back`)
}
else if (cash===price){
    console.log("You r good, enjoy!")
}

else {
    console.log(`Brokie, get your money up, you need ${price-cash} more.`)
}