//Weakmap - In Weakmap the keys should be an object
let ap = {};

let weak = new WeakMap();
weak.set(ap, "test");
console.log(weak.get(ap));

//has
console.log(`Has:`, weak.has(ap));
