//Method 1: Object Lieral
let ap = { name: "Arun", age: 29 };

//Method 2: Object Constructor
let sp = new Object();
sp.name = "Arun";
sp.age = 29;

//Access Object (Get All Properties)
for (a in ap) {
  console.log(a);
}

//Get All the values in an object
for (s in sp) {
  console.log(sp[s]);
}

//to find whether object's property is present or not
console.log("age" in sp);

//alternate method to get keys in array format
console.log(Object.keys(ap));

//alternate method to get values in array format
console.log(Object.values(sp));
