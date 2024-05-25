const num =[1,2,3,4,5,6,7,8,9,10]

// const newnum = num.map( (num) => num + 10 )
// console.log(newnum);[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const newnum = num
                .map((num) => num*10) 
                .map((num) =>num + 1) 
                .filter( (num) =>{
                    return num >= 40;
                })
// console.log(newnum); [41, 51,  61, 71, 81, 91, 101]