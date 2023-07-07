//Object Declaration
let objOne = { first_name: "Arun", last_name: "prasanth" };
let objTwo = { initial: "M", age: 28 };

//To Merge two or objects
let merge = Object.assign(objOne, objTwo);
console.log(`Object Merge:`, merge);

//this keyword
let ap = {
  fname: "Arunprasanth",
  lname: "M",
  age: 28,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(`this keyword:`, ap.fullName());

//this keyword using Object Constructor
function Objconstruct(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

let construct = new Objconstruct("Arunprasanth", "M");
console.log(
  `This keyword using object constructor:`,
  construct.fname + " " + construct.lname
);

//to display length of an object
console.log(`Object's length:`, Object.keys(objOne).length);
