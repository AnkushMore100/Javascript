// for(let i =1; i<11; i++){
//     console.log(i)
// };

// for(s1;ConvolverNode;inc/dcr){
//     //
// }




// let x = 10;
// // x = x + 1
// x++;   // ++ increment oprator

// // x = x-1 
// x--; // decrement operator
// console.log(x);

// for(let a = 1; a < 11 ; a++){
//     console.log(a);
// };


// empty loop infinite mdhe jato

// index wise plkay krayech asel tr he method use krayechi ahe

let color = ['red','blue','black','pink'];
let color1 =[];
for(let r = 0; r < color.length; r++){
      if(color[r]!='blue'){
        color1.push(color[r])
      }
}
console.log(color1);





// for of // array sathi bnla ahe index start with = 0 and length start with 1
// for in // object sathi bnla ahe

let color2 = ['red','blue','black','pink'];
let clr = []
for(let x of color2){
  clr.push(x)
  console.log(clr);
}



let color3 = ['red','blue','black','pink','red11','blue1','black1','pink1'];
let clr2 = [];

for(let ind = 2 ; ind < color3.length ; ind++){
  if(color3[ind] != 'black' && color3[ind] != 'blue1' && color3[ind] != 'pink1'){
          clr2.push(color3[ind]);
  }
}
console.log('clr2',clr2);



// for in loop object

stud = {
  name:"Ankush",
  age :24,
  mobno : 154959585,
  city : "dhule"
}

for(let a in stud){
  console.log("Key print:",a)
  console.log("Value is:",stud[a]);
}