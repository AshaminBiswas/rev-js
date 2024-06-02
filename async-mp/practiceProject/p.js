
const stopb = document.querySelector("#stop")
const start = document.querySelector("#start")

const setInter = function(hi){
    console.log(hi)
} 

start.addEventListener("click", function () {
      
})
const stop =   setInterval(setInter, 1000, "hi") 
stopb.addEventListener("click",function(){
    console.log("Stopped")
    clearInterval(stop)
})



