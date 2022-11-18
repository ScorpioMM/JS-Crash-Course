let cash=10
let price=50

if (cash > price){
    console.log (`you paid extra, here's your change ${cash-price}`)
}

else if(cash===price){
    console.log ("Enjoy your course!")
}

else{
    console.log(`You broke asf, you need ${price-cash} more`)

}