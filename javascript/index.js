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
//console.log("result",interest);



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
//console.log(si);
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
//console.log(data);


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
//arithmetic(10,3);

// Assignment operator
let c=9;  // = -->assignment operator
c+=9; // assignment plsu addition operator ----> c=c+9;
c-=9;
c*=9;
c/=9;
//console.log(c);
// Comparison operator
// they are used to compare two variables and they always return boolean value
// ==
// console.log(3==3); // true
// console.log("3"==3); // true
// === ,it checks the value as well as type
// console.log("3"===3); //false

// // >=
// console.log(7>=5); //true
// console.log(7>=7); // true
// console.log(7>7);// false
// console.log(7<7); //false
// console.log(7<=7); // true

// Logical Operators

// && || booolean they are used to evaluate the boolean values

// console.log(7>5 && 6<8);

// console.log(7>5 || 6<8);

// console.log(7>5 && 6>8); // true will be returned



// You have to create the function to calculate the compound interest
/**
 * A	=	final amount
P	=	initial principal balance
r	=	interest rate
n	=	number of times interest applied per time period
t	=	number of time periods elapsed
 */

//console.log(3**3) // ** --->power operator


// conditionals

// if ,else ,elseif

// if(booleanvalue){

// }

// if(7>61){
//     console.log("I will run");
// }
// else if(7>4){
//    console.log(" i will run when the if condition doesnt work")
// }
// // it will always run at the end --->
// else{
//     console.log("if all the if and else if conditions donot run ,then i will be running")
// }


// fizz buzz problem ---> if the number is divisible by 3 so you have to print fizz
// if its disvisble by 5 --->you have to print buzz
// if its divsible by both 3 and 5 so you have to print fizzbuz

// function Fizzbuzz(num){
//    if (num%3==0 && num%5==0){
//     console.log("fizzbuzz");
//    }else if (num%3==0){
//     console.log("fizz")

//    }else if(num%5==0){
//     console.log("buzz");

//    }else{
//     console.log("no match")
//    }



// }

// Fizzbuzz(10);




// Check if the number is even or odd 
// write a function that checks whether the number is even or odd

// function  evenOrODd(num){
//    if (num%2==0){
//     console.log("its even");
//    }else{
//     console.log("its odd");
//    }
// }
// evenOrODd(90)


// Loops  
// loops are used to repeat the process ,multiple times
//for loop

// for(let i=0;i<30;i=i+1){
//     console.log(" I would be repeated 30 times")
//     // all the code that you want to repeat will go here
// }

// // initilization happens first (it happens only once in the starting of the loop)--->
// // ----->checking condition (i<30)---->executes code inside the curly brackets---->increment-->check
// // ----->condition check--->code execution---->increment

// // Print out all odd numbers between 1 and 100
// function evenodd(){
//     for (let i=1;i<=100;i++){
//        if (i%2!=0){
//         console.log(i);
//        }

//     }
// }

//evenodd()

// while loop ---->

// for (let i=0;i<30;i=i+1){// i =i+1 --->i++

// } 
//  let j=0;
// while(j<0){
//      console.log("I will never be executed")
//     j=i+1
// }
// let i=0;
// do{
//     console.log("hello there")
//     i++;
// }

// while(i<0)


 // Reverse a number 908 --->809
 
 function reverseANumber(num){
    let rev=0;
    while(num>0){
        reminder=num%10;
        rev=rev*10+reminder;
        num=Math.floor(num/10)

    }
return rev
 }

 console.log(reverseANumber(890));