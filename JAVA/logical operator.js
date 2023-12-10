// assignment operator

let a =90;

// equality operator

b =80;

if(b == 80 ){ //equality operator : it will check only value not data type
    console.log("b has 80")
}

if (b == "80"){//==== equality operator : it chks for value as well as data tye
   console.log("sbjfnksd")

}

// greaterthan operator

if (b > 20){
    console.log("B is greater than 20");
}

if (b < 20){
    console.log("jkjkjk");
}

if (b == 20){
    console.log("B is equal to 20");
}

if (b >= 20){
    console.log("b is greater than equal to 20");
}

if (b <= 20){
    console.log("b is less than equal to 20");
}

if (b != 20){
    console.log("b is not equal to 20");
}

let c = true; // True asel tr compiler aat mdhe janar
if(c){
    console.log("sjhksd")
}

let d = false; // false asel tr compiler aat mdhe janar nhi else part run
if(c){
    console.log("sjhksd")
}

if(!c){ // false >> true
console.log("!!!")
}

let e =90;
if(e){
    console.log('eee')
}

let k =90;
if(!k){  //false
    console.log('kk')
}


let f = null;
if(f){ // True
    console.log('eee')
}

let j = null;
if(!j){  // True
    console.log('jjj')
}

// Logical &&(and) and logical |(or)

// T && T >> T; F && T, T && F -->> F

var marks = 60;

if(marks >75 ){
console.log("Distinction");
}




if (marks >35){
    console.log("Pass......");
}else{
    console.log("fail");
}


if(marks >= 75){
    console.log("distinction");
} else if(marks >= 60 && marks < 75){
    console.log("First Class");
} else if(marks >= 50 && marks < 60){
    console.log("Second Class");
}else if(marks >= 35 && marks < 50){
    console.log("Passed");
}
 else{
    console.log("Failed");
}

let mark = 50;
if( mark == 50 && mark > 35 && mark > 45){
    console.log("pass")
}

// T||F,F||T --> T ;F ||F --> F

let x =50;
let y =20;
if(x == 50 || y!=20 || y > 10 ){
    console.log("jgkj")
}

// interview point of view
let age =35;
if(age >=18 && age<=60){
    console.log("Valid EMp");
};

