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
//limitations - retrun value is undefined and chaining of array methods is not possible as the return value is undefined
ap.forEach((item) => {
  console.log(`For Each:`, item);
});

//map() - It returns a new array, chaining of array method is possible
ap.map((item, index, array) => {
  console.log(item.toString().toLowerCase());
});
