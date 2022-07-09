

function calcAge(birthyear) {
    return 2022 - birthyear;
}
age = calcAge(2005);
console.log(`Your age is ${age}`);

//anonymous function

const calcAge1 = function (birthyear) {
    return 2022 - birthyear;
}