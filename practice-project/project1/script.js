const body = document.querySelector("body")
const box = document.querySelectorAll("#box")

box.forEach( function(box) {
    // console.log(box);
    box.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.className === "green"){
            body.style.backgroundColor = e.target.className
        }
        if(e.target.className === "blue"){
            body.style.backgroundColor = e.target.className
        }
        if(e.target.className === "yellow"){
            body.style.backgroundColor = e.target.className
        }
        if(e.target.className === "crimson"){
            body.style.backgroundColor = e.target.className
        }
        if(e.target.className === "red"){
            body.style.backgroundColor = e.target.className
        }
    })
})
