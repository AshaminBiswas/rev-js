// **********OBJECTS**********

// 1. singleton(using constructor)
Object.create


// object literals

const symbol = Symbol("this is symbol")

const myInfo = {
    name: "ashamin biswas",
    "home":"jangipur",
    age: 22,
    gender: "male",
    email: "ashamin123@gmail.com",
    login: ["sunday", "monday"],
    [symbol]:"this is symbol"
}
// console.log(myInfo.name);
// console.log(myInfo["name"]);
// console.log(myInfo["home"]);
// console.log(myInfo[symbol]);
// console.log(typeof myInfo[symbol]);

//change value
myInfo.age = 21;
// console.log(myInfo)

// lock the value
// Object.freeze(myInfo)//this propaty use at the main object
myInfo.age = 22;
// console.log(myInfo)

//greeting

myInfo.greeting = function(){
    console.log("this is greeting")
}
myInfo.greeting2 = function(){
    console.log(myInfo.age)
}
myInfo.greeting3 = function(){
    console.log(`my name is  ${this.name}`)
}
// console.log(myInfo.greeting) //this returns a [Function (anonymous)]
// console.log(myInfo.greeting()) //this is greeting with (undefined)
console.log(myInfo.greeting2) //this returns a [Function (anonymous)]
console.log(myInfo.greeting3()) //my name is  ashamin biswas with (undefined)



