function calculateCardPrice(...num1) {
    return num1
}
// console.log(calculateCardPrice(10 , 20 , 30 , 40));//[ 10, 20, 30, 40 ]

function calculateCardPriceAnatherExamole(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCardPriceAnatherExamole(20, 2000, 400, 50000));//[ 400, 50000 ] and fitsr and second argument
// take the = val1 and val2 

let obj = {
    user:"ashamin",
    price:200
}

function PrintObjectKeyAndValue(anyobject) {
    console.log(`The user name is ${anyobject.user} and the price is ${anyobject.price}`);
}
// PrintObjectKeyAndValue(obj)//The user name is ashamin and the price is 200
// PrintObjectKeyAndValue({user:"sam", roll:"analyst"})//The user name is sam and the price is undefined

let array = [1000, 2000, 3000, 4000, 5000]

function returnValue(getvalue) {
    return getvalue[0]
}
console.log(returnValue(array));//1000
console.log(returnValue([1000, 2000, 3000, 4000, 5000]));//1000