const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);


const user = {
    name:"ashamin",
    email:"ashamin@gmail.com",
    password:1235,

    canuserloggdin: function(){
        console.log("Not Yeat");
    }
}

console.log(Object.getOwnPropertyDescriptor(user,"name"))

// Object.defineProperty(user, "name",{
    // writable:false,
    // enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== "function") {
        console.log(`${key} ${value}`);
    }
        
}