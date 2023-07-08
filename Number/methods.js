let num = 45.95;

//toFixed returns a string
console.log(`To Fixed:`, num.toFixed(1));

//toPrecision returns a string
console.log(`Precisoin:`, num.toPrecision(4));

//valueOf() returns a number
console.log(`Value of:`, num.valueOf());

//parseInt - returns a number
console.log(`parseInt:`, parseInt(num));
let num2 = "49a";
//parseInt converts a string into num if the string is not mentioned 1st
console.log(`parseInt:`, parseInt(num2));

//parseFloat - returns a string into numbers
console.log(`Parse Float:`, parseFloat(num));
