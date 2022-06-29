// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
//test Data-1
let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95

let bmiMark = weightMark / (heightMark ** 2);
let bmiJohn = weightJohn / (heightJohn ** 2);
console.log(bmiJohn, bmiMark);

let markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);
//test Data-2
weightMark1 = 95;
heightMark1 = 1.88;
weightJohn1 = 85;
heightJohn1 = 1.76;

let bmiMark1 = weightMark1 / (heightMark1 ** 2);
let bmiJohn1 = weightJohn1 / (heightJohn1 ** 2);
console.log(bmiJohn1, bmiMark1);

let markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log(markHigherBMI1);


//super easy lol, maybe I shouldnt say this.. upcoming challanges may come to be harder than expected :-(

