const myObject = {
    name: "ashamin",
    role: "web developer",
    trade: "ECE"
}

for (const key in myObject) {
    // console.log(key);
}
/*
    op=
    name
    role
    trade
*/

for (const key in myObject) {
    // console.log(`${key} in objectis ${myObject[key]}`);
}

/**
 Output= name in objectis ashamin
role in objectis web developer
trade in objectis ECE
 */

const programingLangauge = ["js", "c++", "java", "python", "swift"]

for (const key in programingLangauge) {
    // console.log(key);
}//0 1 2 3 4

for (const key in programingLangauge) {
    // console.log(`${key} in array ${programingLangauge[key]}`);
}
/**
 OUTPUT=
 0 in array js
1 in array c++
2 in array java
3 in array python
4 in array swift
 */

const map = new Map()
map.set('js', 'javascript')
map.set('cpp', 'C++')
map.set('py', 'python')
map.set('java', 'java')
for (const key in map) {
    // console.log(key); // map is not iteratable
}
