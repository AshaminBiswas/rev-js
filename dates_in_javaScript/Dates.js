// let date = new Date()
// console.log(date);// op= 2024-05-13T20:40:36.648Z
// console.log(date.toString())//op =Tue May 14 2024 02:10:36 GMT+0530 (India Standard Time)
// console.log(date.toDateString())// op= Tue May 14 2024
// console.log(date.toLocaleString())// op= 14/5/2024, 2:10:36 am
// console.log(typeof date)// op= object

// let newDate = new Date(2003, 0, 23)// month started with 0 in java script
// console.log(newDate.toDateString())//Thu Jan 23 2003
// let mudate = new Date("10-02-2014")
// console.log(mudate.toLocaleString())




//++++++++++++++++Time Stams++++++++++++++


// let date = new Date("10-20-2010")
// console.log(date.getTime())
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))

let date = new Date()

// console.log(date.getDate())
// console.log(date.getFullYear())
// console.log(date.getDay())

date.toLocaleString("dedault",{
    weekday:"long",
    timeZone:""
})


