//Strings:
const name1 = "Will";

const myAge = 16;

const yourAge = 24;

console.log("Hello my name is "+ "Ed");

console.log(`Hello it's me ${name1} and I am ${myAge} years old.`);

console.log(typeof yourAge);

//Functions:
const name2 = "William";

const youtuber = "Traversy Media";

function toUpper(text) {
 const upperCased = text.toUpperCase();
 console.log(upperCased);
}

const toUpper = () => {

}

//Math:
const num1 = 100;
const num2 = 50;
let val;

// Simple Math //
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object //
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(1,2);
val = Math.max(3,4);
val = Math.random();

console.log(val);

//Parameters and Arguments//
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15);
{
    //function body//
    console.log('Running Calculate Bill!');
    const total = billAmount + (billAmount * taxRate + billAmount * tipRate);
    return total;
}

//function call//
const wesTotal = 500;
const wesTaxRate = 0.3;

//function definition//
function sayHiTo(firstName) {
    return `Hello ${firstName}`
}

function doctorize(name){
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined ,0.2);
console.log(myBill4);

