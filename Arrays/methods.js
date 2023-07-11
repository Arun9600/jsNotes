let arr = ["A", "B", "C", "D"];
let arr2 = ["E", "F", "G", "H", "I"];

//push - It is used to add elements to an array at the end. This method will modify the original array
//If push is stored in a variable and if we log that variable we will get length of an array
arr.push("E");
console.log(`Pushed:`, arr);

//pop - It is used to remove the last element form an array. This is overwrite the existing aaray
arr.pop();
console.log(`Popped Array:`, arr);

//shift - Used to remove elements from the start
arr.shift("B");
console.log(`Shifted Array`, arr);

//unshift - used to add element from  start
arr.unshift("A");
console.log(`Unshifted Array:`, arr);

//concat - used merger two or more arrays
let s = arr.concat(arr2);
console.log(`Array Concatenation:`, s);

//join() - Used to convert an array into string
let p = arr.join(" ");
console.log(`Array Join:`, p);
console.log(`Data type of an array post join method:`, typeof p);

//flat() - used to reduce the array dimesions
let a1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(`Array flat():`, a1.flat());

//splice - used to remove and add items to an array and this wil modify the original array
//if splice is stored in a variable it will returns the removed value
arr.splice(0, 2, 1, 2);
console.log(`Spliced Array:`, arr);

//slice - It is used to slice the specified part of an array and this method returns a value in new array
let x = arr.slice(0, 1);
console.log(`Sliced Array:`, x);

//toString() - Used to convert a array into a string
console.log(`To String Mehod:`, arr2.toString());
console.log(`typeof to String Method:`, typeof arr2.toString());
