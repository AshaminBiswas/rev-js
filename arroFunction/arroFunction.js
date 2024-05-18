// ARRO FUNCTION

const user = {
    name: "ashamin",
    price: 999,

    welcomemessege: function () {
        console.log(`${this.name} welcome to web`);// refer to current context
        // console.log(this);
    }
}

// user.welcomemessege()
// user.name = "soumen"
// user.welcomemessege()//soumen welcome to web
// console.log(this);// {emty object}


// function name() {
//     let user = "ashamin"
//     console.log(this.user); //undefined
// }
// name()


const funck = () => {
    let user = "ashamin"
    console.log(this.user);//undefined
}
// funck() //{}

// explicite return
const ArroFunction = (num1, num2) =>{
    return num1 + num2;
}
// console.log(ArroFunction(12, 35))



/*****Implesite return ****/

// const arroFunction = (num1, num2) => num1 + num2;
// const arroFunction = (num1, num2) => (num1 + num2);
const arroFunction = (num1, num2) => ({userName:"Ashamin Biswas"});//{ userName: 'Ashamin Biswas' }
console.log(arroFunction(20, 30));


const myArray = [1, 2, 3, 4, 5]
// myArray.forEach {() =>(

// )}