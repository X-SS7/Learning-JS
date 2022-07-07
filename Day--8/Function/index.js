"use strict"
// finally functions; the most anticipated part ;p
function logger() {
    console.log('My name is sakshyam');
}
//calling/ running/ invoking/ executing function
logger();
logger();
logger();

function fruitProcessor(apple, oranges) {
    const juice = `Juice with ${apple} apples and ${oranges} oranges`;
    return juice;
}

const juiceMix = fruitProcessor(5, 0);
console.log(juiceMix);
console.log(fruitProcessor(10, 5));

console.log(fruitProcessor());//no parameter

