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