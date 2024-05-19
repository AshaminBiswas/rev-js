const name = "Ashamin"
let age  = 22;
console.log(name  +  age + " value");
// this is bad way to console

let ashamin = "Ashamin Biswas"
let NweAge = 23;

console.log(`My name is ${ashamin.toUpperCase()} and My New age is ${NweAge}`);
//that is call strings interpolaions and easy to readable

//Anathor way to define strings

const Role = new String('Frontend developer ')
console.log( Role[0]);
//iss return character of the position 
console.log(typeof Role);
// type of the string
console.log( Role.length);
//how many character in a strings including wide space
console.log( Role.toUpperCase());
///onvert to uppercase 
console.log( Role.charAt(3));
//character of the index number in strings
console.log( Role.indexOf("t"));
//index of character in strings

const Role1 = new String('Frontend-developer')
const NewRole = Role1.substring(0,7)
// console.log(NewRole)
// this methode takes the (started index to end index) which we make a subsrting
// there is a chach thst suppose i have a string that is "ASHAMIN" and i want make it a new substring that is "ASHA"
// then i will give the index where do we start and give the end index ihat is (0,5) but this print only 4 character.

//slice 

let myFriend = "soumen"
let slice = myFriend.slice(0,4)
let slice1 = myFriend.slice(-7,4)
let slice2 = myFriend.slice(-5,4)
console.log(`slice: ${slice} slice1: ${slice1} slice2: ${slice2}`)
//Output = slice: soum slice1: soum slice2: oum

//Trim & Repless
let key = "     zama     aa"
console.log(key);
console.log(key.trim());
/*
UOTput =      zama     aa
zama     aa 
*/
//trim is cutout the after wide space in your value 

const url = "https://ashamin%20biswas"
console.log(url.replace('%20', '_'))
// its take two values first is what we replace and second is what is add the new. ist pass on single cote

//Include
const asha = "ashamin biswas"
console.log(asha.includes("ashamin"));//true
console.log(asha.includes("soumen"));//false
//its find the key word in your string thats have or not. its return true or false

//convert to array using split
const arr = "asha-min-bis-was"
console.log(arr.split('-'))
// there is we splite basese od -
console.log(arr.split());

