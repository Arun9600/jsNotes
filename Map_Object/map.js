//Map Object is used to store keyed collection of values like object. The Main difference is object's property should be a string or number. In Map it can be any

//Method 1: Map Object Creation
let ap = new Map();

//add a key, value to a map
ap.set("name", "Arunprasanth");
ap.set("age", 29);

//map
console.log(`Map:`, ap);
//get the map key's value
console.log(`Get the value:`, ap.get("name"));

//has the key in Map Object, returns true or false
console.log(`Has Method:`, ap.has("name"));

//get the size of the Map Object
console.log(`Map Size:`, ap.size);

//get all the keys in Map Object
console.log(`All Keys:`, ap.keys());

//get all the values in Map Object
console.log(`All Values:`, ap.values());

//get key values pairs
console.log(`Key N Value:`, ap.entries());

//Method 2: Map Object Creation
let bp = new Map([
  ["name", "Arun"],
  ["age", 29],
]);
console.log(bp);
