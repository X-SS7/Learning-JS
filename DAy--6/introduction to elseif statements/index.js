const favNumber = Number(prompt("Enter your favoriate Number"));
console.log(favNumber);
if (favNumber === 7) {
    console.log("Very common favoriate number");
} else if (favNumber === 3) {
    console.log("you love odd and prime number");
}
else {
    console.log(`your favourate number is neither 7 nor 3`);
}


// different opperator
if (favNumber !== 7) {
    console.log(`Favourtie number  isn't 7`);
}