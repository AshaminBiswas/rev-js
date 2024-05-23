const webLangauge = ["html", "css", "javaScript", "React"]

webLangauge.forEach(function (val) {
    // console.log(val);
})
webLangauge.forEach(element => {
    // console.log(element);
});
/**
html
css
javaScript
React
 */
function printMe(item) {
    // console.log(item);
}
// webLangauge.forEach(printMe)//html css javaScript React

webLangauge.forEach((item, index, array) => {
    // console.log(`Item is :${item}, index is ${index}, array is ${array}`);
})
/**
  output=>{
    Item is :html, index is: 0, array is: html,css,javaScript,React
    Item is :css, index is: 1, array is: html,css,javaScript,React
    Item is :javaScript, index is: 2, array is: html,css,javaScript,React
    Item is :React, index is: 3, array is: html,css,javaScript,React
  }
*/

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Pythone",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageFileName);
})