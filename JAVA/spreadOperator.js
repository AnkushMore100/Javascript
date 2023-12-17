// sp operator : [...]:The javascript spread operator  allow us to quickly copy all a part of 

const numbers = [1,2,3,4,5,6];
let no2 = [...numbers]
console.log(no2);

// madhle item gheu shkt nhi

let[no3,no4,...no5]=numbers;
console.log(no3);
console.log(no4);
console.log(no5);

let a = [11,33,44,45];
let b = [5,6,7,8,9];
let c = [...a,...b];
console.log(c);


// object sobt spread operator use krt nhi

let obj = {name:"Ankush",age:24,city:"Dhule",state:'Mh'};
let obj1 = {...obj};
console.log(obj1);


// merge hot nhi data lost hot ahe aani concate hot nhi
let obj2 = {name:'om',age:44,city:'Pune',mobno:8488555};
let obj3 = {...obj1,...obj2};
console.log(obj3);



// const obj11 = {1:"a", 2:"b"} 
// const obj12= {3:"c", 4:"d"}
//  const obj13 = {5:"e", 6:"f"} 
//  const obj14 = {...obj11, ...obj12 , ...obj13}
//   console.log(obj14);