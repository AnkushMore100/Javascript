// for each

let a = [
   { name: 'Ankush',city:"Dhule"
},
{ name: 'Pooja',city:"Nagpur"
},
{ name: 'ritu',city:"Nashik"
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

var n1 =a.map(item =>{
    return item.name
})

console.log(n1);


// filter


n2 = a.filter(ele => {
    if(ele.name = 'pooja'){
        return ele;
    }
})
console.log(n2);
