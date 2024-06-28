class User{
    constructor(username, email, password){
        this.username = username
        this.password = password
        this.email = email
    }

    encryptPassword(){
        return ` ${this.password}abc`
    }

    toCapitalUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("ashamin", "ashamin@gmail.com", "12345")
// console.log(user1.encryptPassword());
// console.log(user1.toCapitalUsername());


//Behind the sence

function user (username, email, password){
    this.username = username
    this.password = password
    this.email = email
}

user.prototype.mdfusername = function(){
    return `${this.username.toUpperCase()}`
}

user.prototype.encryptPass = function(){
    return ` @ab${this.password}#00`
}

users = new user("ashamin", "ashamin@gmail.com", "123")
console.log(users.mdfusername());
console.log(users.encryptPass());