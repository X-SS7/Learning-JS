
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


//test Data-2
weightMark1 = 95;
heightMark1 = 1.88;
weightJohn1 = 85;
heightJohn1 = 1.76;

let bmiMark1 = weightMark1 / (heightMark1 ** 2);
let bmiJohn1 = weightJohn1 / (heightJohn1 ** 2);
console.log(bmiJohn1, bmiMark1);


/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// test data 1
if (bmiJohn > bmiMark) {
    console.log(`John BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
}
else {
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
}
// test data 2 
console.log("for test data-2");
if (bmiJohn1 > bmiMark1) {
    console.log(`John BMI ${bmiJohn1} is higher than Mark's BMI ${bmiMark1}`);
}
else {
    console.log(`Mark's BMI ${bmiMark1} is higher than John's BMI ${bmiJohn1}`);
}