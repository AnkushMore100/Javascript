// let var const difference

// let: block level scope 
// var:function level scope



function test(){
    let a = 40;

    if(a>20){
        let b = 5;
    }

    let c =a/b   
     // block cha bher let b acsses kru shkt nhi// 
     console.log(c)
    }


    // let la block level scope asto
    // aani 
    // var la function level scope asto



    function test1(){
        let a1 = 40;
    
        if(a1>20){

            var b = 5;
        }

    
        let c1 =a1/b ;
        console.log(c1);

    }





    function test2(){
        let a2 = 40;
        let b = 5;      // var,const,let sagd chlt  
    
        if(a2>20){
            // var b = 5;
            console.log(b)
        }

    
        let c2 =a2/b ;
        console.log(c2);

    }

    // 2 difference

    // re-delceration of variable is not possible with let keyword

    // let a1 = 12;   //error
    // let a1 = 40;

// re-delceration of varibale is  possible with var keyword 
    var b1 = 33;
    var b1 = 30;



// interview question

// hosting;=>

// hoisting possible with var keyword not possible with const and let keyword

// t = 60;
// let t;   // error

z = 50;
var z;       // possible because default keyword is var
console.log(z);

j = 80;
const j;   //error


// const j =80;  allowed



// reassigning calue is possible with let and var but not possible with const

let d =60;
d = 90;
console.log(d); // valid

var y =62;
y = 30;
console.log(y);  //valid


const g = 30;
g = 90;
console.log(g); //error


