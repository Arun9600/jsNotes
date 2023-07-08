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

//replace - This method is used to replace the first occurance of the text
//replace.All() - Used to replace all the occurances of the specified text
console.log(`Replace Method:`, ap.replace("M", "m"));

//text transfrom
console.log(`Uppercase:`, ap.toUpperCase());
console.log("Lowecase:", ap.toLowerCase());

//to find the index, this method accepts string value
//index always starts from 0
console.log(`IndexOf()`, ap.indexOf(" "));
//to get last element index
console.log(`LastIndexOf():`, ap.lastIndexOf("a"));
//search will also returns the index of specofied substring
console.log(`Search:`, ap.search("A"));

//includes returns a boolean
console.log(`inlcudes:`, ap.includes("r"));

//startsWIth() returns boolean
console.log(`Starts with():`, ap.startsWith("A"));

//endsWith returns boolean
console.log(`EndsWith():`, ap.endsWith("M"));

//to get a part of the string
//slice(start element, end element) this will not consider the last element
//this accepts negative values too
console.log(`Slice():`, ap.slice(0, 2));

//substring
//sunstring(start, end) will not accept negative value
console.log(`Substring():`, ap.substring(2, 5));

//substr(start, length)
console.log(`Substr():`, ap.substr(0, 3));

//concat - used to merge two string
let bp = "Hi How are you?";
console.log(`Concat:`, bp.concat(ap));

//repeat - used to repeat the same string number of times
console.log(`Repeat:`, ap.repeat(2));

//split - used to split a string into an array
console.log(`Split:`, ap.split(" "));

//valuesof - returns absolute string from string object
console.log(`valueof:`, ap.valueOf());
