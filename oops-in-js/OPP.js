
// Object littrel
// const user = {
//     username:"ashamin",
//     login:8,
//     signedIn:true,

//     getUserDetails: function(){
//         console.log("Got user details");
//         // console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());



//constructor function

// const promiseOne = new Promise()

function user(username, logincount, islogin) {
    this.username = username;
    this.logincount = logincount;
    this.islogin = islogin;
    // return this
}
const userOne = new user("ashamin", 12, true)
const userTwo = new user("biswas", 14, false)
console.log(userOne);
console.log(userTwo);

// new = > 