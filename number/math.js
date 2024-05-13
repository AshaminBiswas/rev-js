console.log(Math)
console.log(Math.abs(-4));
// this methods use to  negitive value convert to positive value
console.log(Math.round(4.33));
// this method use to roundof the decimal number
console.log(Math.ceil(4.33));
//this methos gives the higher value of the decimal number like 4.3 = 5
console.log(Math.floor(4.33));
//this methos gives the lower value of the decimal number like 4.3 = 4
console.log(Math.sqrt(4));
// this method give the squar root of thr number
console.log(Math.min(4,2,5,4,58,76,363));
//this method gives the minimum value which we pass the parenthesis
console.log(Math.max(4,2,5,4,58,76,363));
//this method gives the maximum value which we pass the parenthesis

console.log(Math.random());
// its give the random value that is (0 to 1)
console.log(Math.floor (Math.random()*10) +1);

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()*(max - min + 1))+ min)