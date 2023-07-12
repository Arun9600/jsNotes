let ap = ["A", "B", "C", "D", "C"];

//some - If any one of the array element passes the test confition it will returns true
console.log(
  `Some Method:`,
  ap.some((item, index, array) => item === "A")
);

//includes
//syntax: includes('substring', position)
console.log(`Includes Method`, ap.includes("D"));

//every - This will returns true if all the element passes the test condition
console.log(
  `Every:`,
  ap.every((item, index, array) => item === "A")
);

//every method true equation
let ap1 = [2, 4, 6];
console.log(
  `True Every Method:`,
  ap1.every((item, index, array) => item % 2 == 0)
);

//Array.isArray - Static method used to check whether the variable is an array or not
console.log(`Array check:`, Array.isArray(ap));

//indexOf() - This will return the index of the specified string, Incase if the specified text is not present in the array it will returns -1
console.log(`IndexOf:`, ap.indexOf("C"));

//lastIndexOf() - This will return the index of the last element
console.log(`lastIndexOf:`, ap.lastIndexOf("C"));

//forEach() - This method iterates through all the elements in an array
//limitations - retrun value is undefined and chaining of array methods is not possible as the return value is undefined, so this method will not return a new value
ap.forEach((item) => {
  console.log(`forEach():`, item);
});

//map() - It returns a new array, chaining of array method is possible
let sp = ap.map((item, index, array) => {
  return item.toString().toLowerCase();
});
console.log(`Array Map:`, sp);

//filter - This method returns the value that passes the test condition
let filter = ap.filter((item, index, array) => {
  return item === "C";
});
console.log(`Filter:`, filter);

//reduce - used to combine multiple array elemets into a single value and this method always returns a new array
let reduce = ap.reduce((a, i, I, array) => {
  return a + i;
});
console.log(`Reduce:`, reduce);

//reduceRight - acts from right to left
let reduceR = ap.reduceRight((a, i, I, A) => {
  return a + i;
});
console.log(`Reduce Right:`, reduceR);

//find - This will always returns a new aray
let find = ap.find((item, index, array) => {
  return item === "C";
});
console.log(`Find:`, find);

//The main difference between filter and find is the filter will return all the elements that is matching the test condition, whereas find returns only the first element that matches the condition

//findIndex - returns index of specified element
let findIndex = ap.findIndex((item, index, array) => {
  return item === "A";
});
console.log(`findIndex:`, findIndex);

//findLastIndex - returns the index of the last element that satifies the condition
// let findLastIndex = ap.findLastIndex((item, index, array) => {
//   return item === "A";
// });
// console.log(`findLastIndex:`, findLastIndex);

//entries - used to get index & it's value from an array
let entries = ap.entries();
for (entries of entries) {
  console.log("Entries:", entries);
}

//keys - used to get index list from an array
let keys = ap.keys();
for (keys of keys) {
  console.log(`Keys:`, keys);
}

//fill - used to fill the specified value in an array
let fill = ap.fill("M", 1, 2);
console.log(`Fill:`, fill);
