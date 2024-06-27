function setUserName(username){
    this.username = username
}

function createuser(username, email, password){
    setUserName.call(this,username)
    
    this.email = email
    this.password = password
}

const createuser1 = new createuser ("ashamin", "ashamin@gmail.com", "123456")
console.log(createuser1);
// output not using call method = createuser { email: 'ashamin@gmail.com', password: '123456' }
///Using .call = createuser { email: 'ashamin@gmail.com', password: '123456' }
// Using .call with (this parameter) = createuser {username: 'ashamin', email: 'ashamin@gmail.com', password: '123456'}
