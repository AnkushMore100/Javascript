let text = "Ankush fhjfd kfdjfk";
console.log(text.length);



let text1 = " i like mango"
console.log(text1.slice(1,6)); //start index : icluding and end index: Excluding

console.log(text1.slice(1));


console.log(text1.slice(-6,-1)); // -6 is exclusive , -1 inclusive




let text2 = "i like mango"
console.log(text2.substring(-5,9)); // negative index will treated as 0 there

console.log(text2.substr(4,6));// end index will consider here as a length 4 is index and 6 is count 




// The replace() method does not change the string it is called on.

// The replace() method returns a new string



//1. The replace() method replaces only the first match

var details = 'Mumbai is metrocity. i like Mumbai';

console.log(details.replace("Mumbai","Nagpur"));


// 2.if you want to replace all match, use a regular expression with the /g flag set. see examlpes below

console.log(details.replace(/Mumbai/g,"Pune"));  // its case sensitive


// non-case sensitive bnvayech asel tr khalil method use krayech

var details = 'Mumbai is metrocity. i like mumbai';

console.log(details.replace(/Mumbai/i,"Delhi"));
console.log(details.replace(/Mumbai/ig,"Nagpur"));


// replaceAll

console.log(details.replaceAll("Mumbai","ppppppp"));
console.log(details.replaceAll(/Mumbai/ig,"ppppppp"));


// toUppercase and toLowercase

console.log(details.toUpperCase());
console.log(details.toLowerCase());


//String Concate

let a ="ankush";
let b = "More";

let fullName = a.concat(b)
let fullName1 = a.concat(' ',b)

console.log(fullName)
console.log(fullName1)

// Trim

let text3 = "       Hello    World!            ";
let text4=  text3.trim();
console.log(text4);

console.log(text3.trimEnd());
console.log(text3.trimStart());


// split

let myDate = "04/04/1992";
var year = myDate.split("/");
console.log(year)
console.log(year[2])