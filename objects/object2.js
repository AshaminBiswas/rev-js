//singleton Object ()

const user = new Object()

user.Id = "ashamin123"
user.name = "ashamin"
user.gender = "male"
// console.log(user)

const newUser = {
    email:"ashamin",
    newFullname:{
        fullname:{
           name: "ASHAMIN BISWAS",
           age:22
        }
    }
}
// console.log(newUser); //{email: 'ashamin',newFullname: { fullname: { name: 'ASHAMIN BISWAS', age: 22 } }}
// console.log(newUser.newFullname)// { fullname: { name: 'ASHAMIN BISWAS', age: 22 } }
// console.log(newUser.newFullname.fullname) //{ name: 'ASHAMIN BISWAS', age: 22 }
// console.log(newUser.newFullname.fullname["name"]) // ASHAMIN BISWAS


// Marge object

const object1 ={1:"a", 2:"b", 3:"c"}
const object2 ={4:"d", 5:"e", 6:"f"}

const oobj3 = Object.assign(object1, object2)
// console.log(oobj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const oobj4 = Object.assign({}, object1, object2)// the emay {object} is a targate
// console.log(oobj4); // this is  optional but garanted { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//SPRADE METHOD
const obj3 = {...object1, ...object2}
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//THIS VALUE GATING FORM DATABASE**IMPORTANT
// ARRAY OF OBJECT
const DATABASE = [
    {Id: 11, code:"123ad"},
    {name:"ashamin", roll:"WEB DEVELOPER"},
    {name:"soumen", roll:"FRONTEND"}
]
DATABASE[1].Id

// console.log(user);//{ Id: 'ashamin123', name: 'ashamin', gender: 'male' }
// console.log(Object.keys(user));//[ 'Id', 'name', 'gender' ]
// console.log(Object.values(user))// [ 'ashamin123', 'ashamin', 'male' ]
// console.log(Object.entries(user))// [ [ 'Id', 'ashamin123' ], [ 'name', 'ashamin' ], [ 'gender', 'male' ] ]
// console.log(user.hasOwnProperty("lol"))// false
// console.log(user.hasOwnProperty("name"))// true

