let ap = ["A", "B", "C", "D"];

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
