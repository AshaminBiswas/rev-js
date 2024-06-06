// //creating promise
// const promiseOne = new Promise(function (resolve, reject){
//     // Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function() {
//         console.log("async task is complete");
//         resolve()
//     }, 1000) 
// })

// //consumeu promise

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


//second promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("this is promise");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("complete");
// })


//Third promise

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ user: "ashamin", email: "abcg@gmail.com" })
//     })
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


//fourth promise

// const fourthPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (error) {
//             resolve({username:"ashamin", passs:"123456"})
//         }else{
//             reject("ERROR Something went wrong")
//         }
//     },1000)
// })
// fourthPromise.then((user) =>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log("the promise is resolved or rejected");
// })


//Promise five

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let err = true;
        
//         if (!err) {
//             resolve({username:"ashamin", pass:"123"})
//         }else{
//             console.log("ERROR: somthing went worng");
//         }
//     },1000)
// })
// async function consumePromiseFive() {
//     // const responce = await promiseFive;
//     // console.log(responce);
//     try {
//         const responce = await promiseFive;
//         console.log(responce);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()




//get data from api 

// async function getAllUser() {
//   try {
//     const responce =  await fetch("http://jsonplaceholder.typicode.com/users")
//     const data = await responce.json()
//     console.log(data);

//   } catch (error) {
//     console.log("Er:",error);
//   }
// }

// getAllUser()



fetch("http://jsonplaceholder.typicode.com/users")
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})