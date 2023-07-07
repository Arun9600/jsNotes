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
console.log(`Object's length:`, Object.keys(objTwo).length);

//create an object from another object
let cp = Object.create(objTwo);
cp.initial = "A";
cp.age = 29;
console.log(cp);

//display objects key and value into an array
let dp = Object.entries(objTwo);
for (d of dp) {
  console.log(d);
}
