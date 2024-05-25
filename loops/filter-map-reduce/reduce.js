const  myArray = [1,2,3];

let initialValue = 0;
const array = myArray.reduce(function (acc, curval){
    // console.log(`acc:${acc} and curval:${curval} `);
    return acc + curval;
},0) // 6
// console.log(array);

const nweArr = myArray.reduce( (acc, currval) =>{ return acc + currval},0)
// console.log(nweArr);

const shoppingCard = [
    {item:"js course", price:999},
    {item:"python course", price:2999},
    {item:"mobile Dev course", price:4999},
    {item:"AI ML course", price:9999},
    {item:"Data Science course", price:12999}
]

const priceToPay = shoppingCard.reduce( (acc, item) => { return acc + item.price},0)
console.log(priceToPay);//31995