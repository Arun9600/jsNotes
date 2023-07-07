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
console.log(ap.fullName());
