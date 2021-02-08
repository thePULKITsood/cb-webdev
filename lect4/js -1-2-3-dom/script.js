
        let a =10;
        console.log(a);
        console.log("hello world");


b =20 ;      // global scope
var d =30    // function scope
let e =50;    // block scope
   
function fun ()
{
    let a = 5;
    if (a==5)
    { var f=10;
        console.log("inside" ,b);
    }
    
    console.log("outside" ,f)
}
// way of declaring function -

function sqrttt ( n)
{
    console.log(Math.sqrt(n));
    return Math.sqrt(2*n);
}
// sqrt_n(10); -- will give error if it comes before ! ! 


//function hosting 

// the first type of functions are hoisted 

// vese the  functions defined in the manner  are taken to the top of the code and thus 
// any call to these functions wil be addreses 



// the second type of functions are not hoisted   

//  but the functions which are defined as these functions like variable then functions they 
// stay at there place int the code and thus any call that calls then before them returns and error 
// as the function is down in the code and thus can not be called before 
 var sqrt_n= function()
{
    console.log("second func");
}

sqrt_n(10);

/////    -------------------      working with arrays - number 2 


let arr = ["aaa","bbbbb","ccccc"];

console.log(arr);
console.log(arr["length"]);
console.log( arr.length);

arr.push("ddddd");
console.log(arr);

arr.pop()
arr;



// -------------------------- 

// json objects 


// create objects without defining the class 