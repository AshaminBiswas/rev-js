
let a = 300

if(true){
let a = 20
const b = 30
var c = 40
// console.log("inner", a);// block scope
}
// console.log(a,b,c)
// console.log(a);// global scope



// Nested Scope

function one() {
    const user = "ashamin";

    function two() {
        const web = "youtube";
        console.log(user)

    }
    // console.log(web);
    two()
}
one()