const userEmail = "Ashamin.gmail.com"

// if (userEmail){
//     console.log("Got the user Email");

// }else{
//     console.log("Don't have user Email");
// }


//++++++++ Falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//+++++++truthy value
// "0", 'false', " ", [], {}, function(){}


const emtyObject = {}
const emtyArray = []

// if (Object.keys(emtyObject).length === 0) {
//     console.log("object is emty");

// } op = object is emty


// if (emtyArray.length === 0){
//     console.log("Array is emty");

// } op = Array is emty


//Nullsh Coalesicng Operator (??) : null undifine

let val1;
val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator
// condition ?  true : false;

const ice = 100
ice <= 80 ? console.log("less than 80") : console.log("more than 80");;
