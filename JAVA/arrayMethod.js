// length
const fruits = ["Banana","orange","Apple","Mango"];
let size =fruits.length;
console.log(size);

// toString()
let arr = [100,300,30]
let arr1 = arr.toString();
console.log(arr1);

// pop last item delete krto permantly

let color = ['red','blue','black']

let popreturnvalue =color.pop(); //pops out last element
console.log(popreturnvalue); // it will return deleted item
console.log(color);

// push

const fruits1 = ["Banana","orange","Apple","Mango"];
let pushReturnedValue = fruits1.push ('papaya','mango');// The push() method adds a new element to an array (at the end)

console.log(pushReturnedValue);// it will return length of orignal arr
console.log(fruits1);

// shift

const fruits11 = ["Banana","orange","Apple","Mango"];
let shiftReturnedValue = fruits1.shift() // The shift() method delete last element from array

console.log(shiftReturnedValue);// it will return remove element
console.log(fruits11);

// Unshift

const fruits3 = ["Banana","orange","Apple","Mango"];
let unshiftReturnedValue = fruits3.unshift("Pinaaple")// The unshift() method adds new element to an array (at the start)

console.log(unshiftReturnedValue);// it will return length of orignal arr
console.log(fruits3);


// aaray join

const fruits4 = ["Banana","orange","Apple","Mango"];

console.log(fruits3.join(" "));


// concat

colors = ['red','black','white']
car = ['suzuki','tata','mahindra'];

console.log(colors.concat(car));