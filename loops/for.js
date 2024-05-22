// For LOOP

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is in");
    }
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 1; j <= 20; j++) {
        // console.log(` ${i} * ${j} = ${i*j}`);
        
    }
    //table print
}

const myArray = ["virat", "rohit", "surya", "shiraj", "bhoom"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// Key Words in Loop brake and continue

for (let i = 1; i <= 20; i++) {
        if (i == 5) {
            console.log("detected 5");
            break
        }
    console.log("value is ", i);
    
}
for (let i = 1; i <= 20; i++) {
        if (i == 5) {
            console.log("detected 5");
            continue; 
        }
    console.log("value is ", i);
    
}