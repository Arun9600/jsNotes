let arr = ["A", "B", "C", "D"];

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
