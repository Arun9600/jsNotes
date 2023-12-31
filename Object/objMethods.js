//Object Declaration
let objOne = { first_name: "Arun", last_name: "prasanth" };
let objTwo = { initial: "M", age: 28 };

//access a particular property in object
//method 1:
console.log(objOne.first_name);
//method 2:
console.log(objOne["last_name"]);

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
console.log(`Object Create`, cp);

//display objects key and value into an array
let dp = Object.entries(objTwo);
for (d of dp) {
  console.log(`Object entries`, d);
}

//object.keys returns key in an array
let ep = Object.keys(objTwo);
console.log(`Object keys`, ep);

//object.values returns the value in an array
let fp = Object.values(objTwo);
console.log(`Object Values:`, fp);

//call
function New() {
  console.log(`Call Method:`, this.initial);
}
New.call(objTwo);

//bind
function b() {
  console.log(`Bind Method`, this.initial);
}
let s = b.bind(objTwo);
s();

//apply
let aa = { fname: "Saran", lname: "M" };
let ab = ap.fullName.apply(aa);
console.log(`Apply Method`, ab);

//Object.is()
let y = { name: "Arun", age: 29 };
let z = { name: "Arun", age: 29 };
console.log(Object.is(y, z));
console.log(Object.is(y, y));
