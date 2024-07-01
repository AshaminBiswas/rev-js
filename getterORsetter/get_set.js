class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()

    }

    set password(value){
        this._password = value
    }
}

const ashamin = new User("ashamim@ashamin.ai", "123")
console.log(ashamin.password);
console.log(ashamin.email);