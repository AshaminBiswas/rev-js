// function myName(){
//     console.log("a");
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("m");
//     console.log("i");
//     console.log("n");
// }
// myName()

// function sum(number1, number2){
//    console.log( number1 + number2);
// }
// const result = sum(3,4)
// console.log(result) // undefined

function name(number1, number2) {
    // let result = number1+number2;
    // return result; // NOTE: after return anything you dont performed any code in a function
    return number1 + number2;
    console.log("ashamin");
}

const result = name(1,5)
// console.log( "result", result); //result 6

// function userLoginMassege(user){
//     if(user === undefined){
//         console.log("plese enter your argument");
//         return
//     }
//     return  `${user} just login`
// }
// console.log(userLoginMassege());

function userLoginMassege(user = "ashamin"){
    if(user === undefined){
        console.log("plese enter your argument");
        return
    }
    return  `${user} just login`
}
console.log(userLoginMassege("asam"));// asam just login (over rite)

// function userLoginMassege(user = "ashamin"){
//     if(user === undefined){
//         console.log("plese enter your argument");
//         return
//     }
//     return  `${user} just login`
// }
// console.log(userLoginMassege());// ashamin just login