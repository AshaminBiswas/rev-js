//for of loop

let arr = [1,2,3,4,5]

for (const iterator of arr) {
    // console.log(iterator);
}

let greetings = " hello world";
for (const greet of greetings) {
    // console.log(`Each greet is : ${greet}`);
}

// Maps 

const map = new Map()
map.set('in', "india")
map.set('us', "united state of america")
map.set('bn', "bangla desh")
// console.log(map);
/**
 OUTPUT= Map(3) {
  'in' => 'india',
  'us' => 'united state of america',
  'bn' => 'bangla desh'
}
 */

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
/*
OUTPUT=
in :- india
us :- united state of america
bn :- bangla desh
 */


const myObject = {
    name:"ashamin",
    role:"web developer",
    trade:"ECE"
}
for (const [key, value] of myObject) {
    // console.log(key, ':-', value);

}//TypeError: myObject is not iterable
