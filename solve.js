//question 1 (Create a variable called carName, assign the value Volvo to it.)
let carName = "Volvo";

console.log(carName);



/*question 2 (On one single line, declare three variables with the following names and values:)

firstName = "John"
lastName = "Doe"
age = 35*/

let firstName = "John";  // write variable name

console.log(firstName);


let lastName = "Doe";    //write variable values 

console.log(lastName);


let age = 35 ;  // write variable name and values both 

console.log(age);


/*question 3 (Use the correct assignment operator that will result in x being 50 (same as x = x * y).)*/

let x1 = 10;
let y = 5;

console.log(x1 *= y);



//question 4 (Use comments to describe the correct data type of the following variables:)

let length = 16; // number 

console.log(typeof length);

let Name = "Johnson"; // string

console.log(typeof lastName);

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object

console.log(typeof x);



//question 5 (Execute the function named myFunction.)

function myFunction() {
    alert("Hello World!");
}

myFunction();



//question 6 (Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").)


var person = {
    Name : "John",
    age : 50
}

alert(person.Name +" is " + person.age);


/* question 8 (Array Related Question )

 1. Alert the number of items in an array, using the correct Array property: */

const cars = ["Volvo", "Jeep", "Mercedes"];

alert(cars.length);

//2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"]; 

console.log(Brand);

Brand.splice(0,1,"Ford");

console.log(Brand);



/*question 9 (Math Related Problems)*/

//1. Use the correct Math method to create a random number.

let math1 = Math.random();

console.log(math1);

//2. Use the correct Math method to return the largest number of 10 and 20.

let math2 = Math.max(10,20);

console.log(math2);

//3. Use the correct Math method to get the square root of 9.

let math3 = Math.sqrt(9);

console.log(math3);


// question 10 comparison operator related problems! 

/*1. Choose the correct comparison operator to alert true, when x is greater than y. */

const x2 = 10;
const y2 = 5;

alert(x2 > y2);

/*2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".*/


let Age = 16;

let massage= Age < 18 ? "Too young" : "Old enough";

alert(massage);



