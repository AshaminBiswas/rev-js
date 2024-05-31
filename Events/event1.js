
//click event
// Type, TimeStam, DefaultPrevented, 
// Target, toElement, SrcElement, currentTarget
// clintX, clintY, screenX, screenY
// AltKey, ctrkey, shiftkey, keyCode


// document.getElementById("india").onclick = function(){
    // alert(" You click on indian flag")
// }//this is not good practics



// Best Approch
//attachEvent
//Jquary= on event
// const india =  document.getElementById("india")
// india.addEventListener("click",function(e) {
//     console.log("you click on indian flag");
//     e.stopPropagation()// for which on i perfomed
// })// (this True for capturing) & (false for bubling ={when you click the parent then first perform the child function then parent})

// document.getElementById("imege").addEventListener("click",function(e){
//     console.log("you click on div");
// })

// document.getElementById("google").addEventListener
// ("click", function(e){
//     e.preventDefault()
//     console.log("You clicked on google");
//     e.stopPropagation()   
// }, false)


document.querySelector("#imege").addEventListener("click", function(e){
    console.log(e.target.parentNode);

    if(e.target.tagName === 'IMG'){
        console.log(e.tagName);
        let remove = e.target.parentNode
        remove.remove()
    
    }

  
})




