// const coding = ["c", "c++", "java", "python"]

// const values = coding.forEach((item) => {
//     console.log(item);
// });
// console.log(values);

const num = [1,2,3,4,5,6,7,8,9,10]
// let newNum = num.filter((num) =>{
//     return num > 4;
// })
// console.log(newNum);//[ 5, 6, 7, 8, 9, 10 ]

// const num1 = []
// num.forEach( (num)=>{
//     if (num > 4) {
//         num1.push(num)
//     }
// })
// console.log(num1);//[ 5, 6, 7, 8, 9, 10 ]

let books = [
    {title:"book1", writer:"writer1",gener:"history", publish:"1987", edition:"2024"},
    {title:"book2", writer:"writer2",gener:"science", publish:"1984", edition:"2021"},
    {title:"book3", writer:"writer3",gener:"math", publish:"1980", edition:"2022"},
    {title:"book4", writer:"writer4",gener:"math", publish:"1983", edition:"2024"},
    {title:"book5", writer:"writer5",gener:"science", publish:"1985", edition:"2021"},
    {title:"book6", writer:"writer6",gener:"history", publish:"1976", edition:"2024"},
    {title:"book7", writer:"writer7",gener:"poetry", publish:"1988", edition:"2022"},
    {title:"book8", writer:"writer8",gener:"poetry", publish:"1982", edition:"2020"}
]

const userbook = books.filter( (books) =>{
   return books.gener === "history"
})
// console.log(userbook);
/**
 * [
  {
    title: 'book1',
    writer: 'writer1',
    gener: 'history',
    publish: '1987',
    edition: '2024'
  },
  {
    title: 'book6',
    writer: 'writer6',
    gener: 'history',
    publish: '1976',
    edition: '2024'
  }
]
 */

const userbook1 = books.filter( (book) =>{
    return book.publish >= 1983 && book.gener ==="history"
})
// console.log(userbook1);
/**[
    {
      title: 'book1',
      writer: 'writer1',
      gener: 'history',
      publish: '1987',
      edition: '2024'
    }
  ] */