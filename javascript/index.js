// //console.log("hello world"); // print your name here 

// // Js variables --->
// // variables are used to store the data 
// // in js there are three ways to create a variable 
// // using var ,using let ,using const
// var num1=45;  // names should always start with an alphabet and they should be alpha numeric (abcd--z ,and 0-9)
// var num2=20;

// var sum=num1+num2;
// console.log(sum);

// let num3=78;
// let num4=90;

// const num45=89;


// // you have to calculate simple interest  ,si=p*r*t/100

// let principal=9000;
// let rate=10;
// let time=10;

// let si=(principal*rate*time)/100
// console.log(si);

// variables store data 
// let ,var ,const these key words are used to create variables in js

// var principal=10000;
// var time=2;
// var roi=10
let principal=1000;
const time =3;
let roi=10;
let interest=(principal*roi*time/100)
console.log("result",interest);



// functions
// function definition
function calculateSimpleInterest(principal,time,roi){  // parameters passed here
    // function body
    // let principal=1000;
    // const time =3;
    // let roi=10;
    let interest=(principal*roi*time/100)
   // console.log("result",interest);

   return interest;
}


// this is function call
let si=calculateSimpleInterest(1000,2,9);  // arguments
console.log(si);
// calculateSimpleInterest(2000,10,7);
// calculateSimpleInterest(8000,12,8);

// datatypes 
// numbers ,string (text),boolean,image ,videos (binary data)
// + ,-,*,/ (operators);

/// You have to write a function that returns the sum of 5 numbers 
// you have to take those 5 numbers from parameters

function sumof5numbers(num1 ,num2,num3,num4,num5){
    let sum=num1+num2+num3+num4+num5;

    return sum;

}

let data=sumof5numbers(2,3,4,7,9);
console.log(data);


// --- operators in javascript
// Arithmetic operators

// Addition - + ,Subtraction - ,multiplication * ,divsion / ,modulus %
function arithmetic(a ,b){
    let sum=a+b;
    let subtraction=a-b;
    let multiply=a*b;
    let division=a/b;  // quotient
    let modulus=a%b;   // remainder
    console.log("sum",sum);
    console.log("subtract",subtraction);
    console.log("multiply",multiply);
    console.log("division",division);
    console.log("modulus",modulus);

}
arithmetic(10,3);

// Assignment operator
let c=9;  // = -->assignment operator
c+=9; // assignment plsu addition operator ----> c=c+9;
c-=9;
c*=9;
c/=9;
console.log(c);
// Comparison operator

// Logical Operators
// Ternary operators

// You have to create the function to calculate the compound interest
/**
 * A	=	final amount
P	=	initial principal balance
r	=	interest rate
n	=	number of times interest applied per time period
t	=	number of time periods elapsed
 */

console.log(3**3) // ** --->power operator