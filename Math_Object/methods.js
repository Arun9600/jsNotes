//Math Methods
let x = 6.5;

//round() - rounds to the next nearest value
console.log(`Round:`, Math.round(x));

//floor() - rounds to the lowest value
console.log(`Floor:`, Math.floor(x));

//ceil() - rounds to the highest value
console.log(`Ceil:`, Math.ceil(x));

//trunc() - returns only the interger part
console.log(`Trunc:`, Math.trunc(x));

//random - returns a random number
console.log(`Random:`, Math.random(x) + 1);

//Math.pow
console.log(`Math Power:`, Math.pow(2, 2));

//square root
console.log(`Square Root:`, Math.sqrt(9));

//Math.min
console.log(`Math Min:`, Math.min(100, 50, 0, -1));

//Math.max
console.log(`Math Max:`, Math.max(100, 2000, 5000));

//Math Randon
let min = 100;
let max = 1000;
console.log(
  `Random Number between 100 to 1000 is:`,
  parseInt(Math.random() * (max - min) + min)
);
