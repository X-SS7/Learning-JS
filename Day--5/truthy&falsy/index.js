//falsy value: 0,'' ,undefined, null, NaN; Rest all truthy value;

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean('Sakshyam'));

const money = 0;
if (money) {
    console.log(`Dont spend it all`)
}
else {
    console.log(`Get a Job`);
}
let bankBalance = '$100';
if (bankBalance) {
    console.log(`Yaay you have ${bankBalance} in your bank.`);
}
else {
    console.log(`you're broke bitch`);
}