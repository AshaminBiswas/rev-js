const body = document.querySelector("body")



const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#'

    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color

}
console.log(randomColor());

let intrevalID;
const startChangeColor = function () {
    intrevalID = setInterval(changeBgColor, 1000)

    function changeBgColor() {
        body.style.backgroundColor = randomColor()
        document.getElementById("hexcode").innerText = randomColor()
    }
}

const stopChangeColor = function () {
    clearInterval(intrevalID)
}

document.querySelector("#start").addEventListener("click", startChangeColor)
document.querySelector("#stop").addEventListener("click", stopChangeColor)
