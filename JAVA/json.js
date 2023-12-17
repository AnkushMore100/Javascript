
let v = "90909";
let r = parseInt(v);
console.log(r);


let a = {
  employees:[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ],
  city:"pune",
  no :[222,22,22],
  status:true
  }

// data backend la send krnyasati stringfly method use kravi lagte

  let r1 = JSON.stringify(a)
 console.log(r1);
 // data backend vrun aalya vr tyala array object format mdhe aanya sathi aapan JSON.parse use krav lagto jo stringfly data convert krto object array mdhe
 let r2 = JSON.parse(r1);
 console.log(r2);

 let  g5 = {name : {name:"poo"}}
 console.log(g5.name.name);