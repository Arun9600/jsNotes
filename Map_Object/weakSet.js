//weakSet - as like weak Map, the weakSe only accepts Object
//after add has n delete will work on weak set

let ap = { name: "Arun" };
let weak = new WeakSet();

weak.add(ap);
console.log(weak.has(ap));
