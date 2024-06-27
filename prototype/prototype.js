let arr = ["ironman", "thor"]

let powerofheros ={
    ironman:"fire",
    thor:"hamer",
    thorPower: function(){
        console.log(`thor power is ${this.thor}`);
    }
}

Object.prototype.ashamin=function(){
    console.log("ashamin present in all objects");
}

Array.prototype.Hiashamin = function(){
    console.log("Hi ashamin");
}

// arr.Hiashamin()

// powerofheros.ashamin()

// arr.ashamin()




//inheritence

const user = {
    user:"ashamin",
    email:"ashamin@gmail.com"
}

const Teacher = {
    makevideo:true,

}

const TeachingSupport = {
    isAvalable:false,
}

const TASupport = {
    makeAssignment: " js ",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user

// console.log(Teacher);

//mordern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


const myname = "ashamin       "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`the true length is : ${this.trim().length}`)
}

myname.trueLength()
"usha".trueLength()


