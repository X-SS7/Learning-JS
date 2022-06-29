
//operator precedence.
const birthYearSakshyam = 2005;
const birthYearJoe = 2000;
let currentYear = 2022;

console.log(currentYear - birthYearJoe > currentYear - birthYearSakshyam);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x = y = 10;
console.log(x, y);
// right to left precedence.

let ageJoe = currentYear - birthYearJoe;
let ageSakshyam = currentYear - birthYearSakshyam;

const avgAge = (ageJoe + ageSakshyam) / 2;

