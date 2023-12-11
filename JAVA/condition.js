

var marks = 60;

// If
if(marks >75 ){
console.log("Distinction");
}


// if else

if (marks >35){
    console.log("Pass......");
}else{
    console.log("fail");
}

// else if : multiple

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

// else if(marks > 0 && marks <35){
//     console.log("Fail!!!")
// }  as pn chalt pn else lavava lagto


// switch  vlue direct match krto
// 1.what is diff bten if eles and switch

// 2. is break keyword manditory?
// ==> No but switch behivour is change so its break required

// default keyword also not required write in switch

let amount = 100;
switch(amount){
    case 50:
         console.log("You have 50 Rs");
        break;
    case 60:
        console.log("You have 60 Rs");
        break;
    case 100:
        console.log("You have 100 Rs");
        break;
    case 90:
        console.log("You have 90 Rs");
        break;

    default:
        console.log("You  have Money")
        break;

}


//ternory operator condition ? true : False

if (marks >35){
    console.log("Pass......");
}else{
    console.log("fail");
}

marks > 35 ? console.log("Pass") : console.log("Fail");