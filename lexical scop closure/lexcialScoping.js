function outer() {
   let user = "ashamin"

    function inner(){
        console.log(`inner ${user}`);
    }
    inner()
}
outer()
console.log(`outer ${user}`);


//  CLOSURE

