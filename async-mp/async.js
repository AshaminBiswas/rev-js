
const ashamin = function(){
    console.log("ashamin");
}


const changeHeading = function(){
document.querySelector("h1").innerHTML ="this is js asyncronus"
}
const clearMe = setTimeout(changeHeading,5000)


document.querySelector("#stop").
addEventListener("click",function(){
    clearTimeout(clearMe)
    console.log("Time out is stopped");
})