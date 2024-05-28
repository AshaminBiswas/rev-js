const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const err = document.querySelector("#err")
    const bmi = document.querySelector(".bmi")
    const index = document.querySelector("#index")
    const formula = (weight / ((height * height) / 10000)).toFixed(2)

        
    if (height === " " || height < 0 || isNaN(height)) {
        
        err.innerHTML = "Plese Give A Valid Height"
    }
    else if (weight === " " || weight < 0 || isNaN(weight)) {
        err.innerHTML = "Plese Give A Valid Weight"
    } else {
        err.innerHTML = ` Your BMI: ${formula}`
        bmi.innerHTML = formula
    }


    if(formula <= 18.5 ){
        index.innerHTML = "Under Weight"
    }
    else if(formula <= 24.5 && formula >= 18.6 ){
        index.innerHTML = "Normal Weight"
    }
    else if( formula >= 24.6 && formula <= 29.9){
        index.innerHTML = "Over Weight"
    }
    else{
        index.innerHTML = "Obesity"
    }
})