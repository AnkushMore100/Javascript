// data types: 1. Primitive Data type 2. Nonpremitive
// Thre premitive data types: Single value holder -- in javascipt include number,str,



//  number: whole no or decimal no
let amount = 98.9898;  //989898

// typeof(): is used to get data type of data

console.log(typeof(amount));

// string datat type : ''/""

let city ="Mumbai is a big city 545421";
console.log(typeof(city));

// Boolean : true/false

let isFavMovie = true ;
console.log(typeof(isFavMovie))

// Undefined

let a ;
console.log(a);

console.log(typeof(a));

let b = undefined;

console.log(b);
console.log(typeof(b));


// let var false ="Ankush" // we can not decleare resreved keyword for variable name

let r = "none"  // string

let c = null;
console.log('c',typeof(c));
document.write(c, '<br>'); 

// 15 number chya vr asel tr value round-up hote mnje value ek ni vadhte
let cash =999999999999999
document.write(cash,'<br>');


// 15 peksha jasat value asel tr
let cash1 = BigInt('9999999999999999') //1.36656 //1.37
document.write(cash1);


// array: [] : listing >> hetrogenous array

let colors =['red','orange','blck']; // homogenous arr

// interview point of view

var studentNames = ["Ankush","Om",400,true,"Pravin","Jiya",test()]; // hetrogenious aaray

document.write('<br>',"colors:",colors);
document.write('<br>',"studentNames:",studentNames);
console.log(studentNames);



function test(){
    return 50*20

}

let colors2 =[ 'red','orange','black','yellow']

document.write('<br>',colors2[3]);

let cars = []; // Empty array
console.log("cars>>",cars);

// length operator: it gives length of array or string

console.log(colors2.length);

// object: (key:value)

let std ={name:'Ankush',age:20,city:"Dhule"};

let emp = {}; //Empty object

console.log(std.name);
console.log(std.age);



std2 = [
    {name:'Ankush',age:20,city:"Dhule"},
    {name:'Pooja',age:30,city:"Nagpur"},
    {name:'Rakesh',age:40,city:"Nashik"}
]


console.log(std2[0]);

console.log(std2[0].age);

console.log(std2.length);  // Array and string sathi use krto length


