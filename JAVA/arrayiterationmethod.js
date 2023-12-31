// for each

let a = [
   { name: 'Ankush',city:"Dhule"
},
{ name: 'Pooja',city:"Nagpur"
},
{ name: 'ritu',city:"Nashik"
},
{ name: 'ritu1',city:"Nashik"
},
{ name: 'ritu2',city:"Nashik"
}
]

let names = [];
// for(let index =0; index < a.length;i++){
//     names.push(a[index].name)
// }

// console.log(names);


// a.forEach(element =>{
//     names.push(element.name);
// })

// console.log(names);

// var n1 =a.map(item =>{
//     return item.name
// })

// console.log(n1);


// filter


// n2 = a.filter(ele => {
//     if(ele.name = 'pooja'){
//         return ele;
//     }
// })
// console.log(n2);

// continue 

let names1 = [];
// for(let index =0; index < a.length;index++){
//     if(a[index].name == 'ritu'){
//         continue ;
//     }
//     names1.push(a[index].name)
// }

// console.log(names1);


// break 



for(let index =0; index < a.length;index++){
    if(a[index].name == 'ritu'){
        break ;
    }
    names1.push(a[index].name)
}

console.log(names1);