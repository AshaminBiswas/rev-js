document.body.style.backgroundColor = "lightgreen";
function addLanguage(langName) {
    const li = document.createElement("li");
    li.innerHTML = `${langName}`
    document.querySelector(".items").appendChild(li)
}
addLanguage("python")
addLanguage("java")

function aopt(lang) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(lang))
    document.querySelector(".items").appendChild(li)
    
}
aopt("typeScript")

//edit
const secLang = document.querySelector("li:nth-child(2)")
const nweli = document.createElement("li")
nweli.textContent = "Django"
secLang.replaceWith(nweli)

//
const forthlang = document.querySelector("li:last-child")
forthlang.outerHTML = "<li>Mongo</li>"

// remove

const remove = document.querySelector("li:nth-child(3)")
remove.remove()