let ap = `Arunprasanth M`;

//To access a substring in a string
//Method 1:
//at() => accepts numeric value both positive and negative
console.log(`Using at() Method:`, ap.at(0));
console.log(`Get a last substring in a string:`, ap.at(-1));

//Method 2
//This method will acdepts only positive integer
console.log(`Using charAt():`, ap.charAt(-1));

//Method 3
//By using square bracket
//This method also accepts only positive value
console.log(`Using square bracket:`, ap[0]);
