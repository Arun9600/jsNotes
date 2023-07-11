//sorting for Alphabtes
let so = ["A", "B", "C", "Z", "S"];

//sort - used to sort the elements in an array in ascending order
console.log(`Sorted Array:`, so.sort());

//reverse - used to sort the elements in an array in descending order
console.log(`Reverse Sort`, so.reverse());

//sorting for numeric values
let s1 = [1, 2, 3, 4, 5, 600, 8, 1000, 9000, 550];
//The default will not act properly like alphabetic sort
console.log(`Default numeric sort:`, s1.sort());

//Numeric Sort in ascending order
console.log(
  `Proper Numeric sort in ascending order`,
  s1.sort((a, b) => {
    return a - b;
  })
);

//Numeric sort in descending order
console.log(
  `Numeric sort in descending order`,
  s1.sort((a, b) => {
    return b - a;
  })
);
