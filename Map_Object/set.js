let se = new Set();

//add a value without key
se.add("Arun");
se.add("M");
se.add("Arun"); //set will not count duplicate values

//display set Value
console.log(`Current set Value:`, se);

//has
console.log(`Has:`, se.has("M"));

//size
console.log(`size:`, se.size);

//delete
se.delete("M");
console.log(`Post delete set Value:`, se);

//clear
se.clear();
console.log(`Post Clear:`, se);
