const myArr = ["srk", "bhaijaan", "karan", "hritik"]
const myArr2 = ["iron", "thor", "hulk", "superman"]
// myArr.push(myArr2) OP = ["srk", "bhaijaan", "karan", "hritik" ["iron", "thor", "hulk", "superman"]]
// // console.log(myArr)
// console.log(myArr[4][2])

// CONCAT

// const all  = myArr.concat(myArr2)
// console.log(all) //OP = ["srk", "bhaijaan", "karan", "hritik", "iron", "thor", "hulk", "superman"]

//Sprade

// const allnew = [...myArr, ...myArr2]
// console.log(allnew);//OP = ["srk", "bhaijaan", "karan", "hritik", "iron", "thor", "hulk", "superman"]


//Falt

// const arry = [1,2,3,[4,5,6],7,[12,45,87,66,[35,65,58,879,[54,66]]]]

// const newArray = arry.flat(4)
// console.log(newArray)
//its gives the output in a single value and tis take the depth of the array
/** output
 [1,  2,  3,  4,  5,  6,  7, 12, 45, 87, 66, 35, 65, 58, 879, 54, 66]
*/


//

console.log(Array.from("ashaminkuhiukh"))
//this method use to make an array from any data type
console.log(Array.from({name:"ashamin"}));// for object case its take the key and value which i convert to array

let s1 = 100
let s2 = 200
let s3 = 300
let s4 = 400
console.log(Array.of(s1, s2, s3, s4));//its make a new array from the set of element
