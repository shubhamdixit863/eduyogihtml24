// js data types
// string ,number ,boolean 
// undefined ,null
// bigint  --->it is used to represent very big numbers
// userdefined data types
//symbol ---->generally used with iterators 
//const a=null; // number data types

//console.log(typeof a);

// undefined is the default data that is being assigned to any variable

///let c;
//console.log(c);

// null basically is given by the user ,explicitly and it reprsents
// absence of any value
// type of null -->object


// how variable creation happens
//let c=9; // internally it goes to three different phases
// declaration phase
//initialization phase
// assignemnt phase

//hoisting 
// JavaScript Hoisting refers to the process whereby the 
// interpreter appears to move the declaration of functions, variables, classes, 
// or imports to the top of their scope, prior to execution of the code.


// {
//     // var c; -->c=undefined
// console.log(c);

//     var c=9; // c=9;
//     console.log(c);

// }

// {
//     // let c
//     console.log(c); // here it will throw error
//     let c=9; // c=undeffined and c=9;
// }

// Problem statement

// Write a js function that reverses a number 
// write a js function that calculate the sum of digits  // 879 =24 

// function sumOfdigits(num){
//      let sum=0;
//     while(num>0){
//         sum=sum+num%10;
//         num=Math.floor(num/10);


//     }
// return sum;
// }

// console.log(sumOfdigits(890))

// hoisting in function
// these are the side effects of hoisting

//foo(); // this will work as well due to hoissting

// function foo(){
//     console.log(90);
// }



// difference between let vs var vs const

// let c=9;
// var k=8;
// const h=0;

// let vs var
// var h=9;
// var h=90; // valid  as var can be redeclared

// let c=9;
// let c=90;  // invalid you cant redeclare let variable in a scope

// you can redeclare let in a different scope
// {
//     let c=90;


// }
// let c=8;
//  second difference ,let is a block scoped and var is a functional scoped
{
    // if these curly brackets are accompanied with a function then we 

    // call them as function scoped
}

function foo(){
    var t=9;
    console.log(t);
}

//console.log(t);