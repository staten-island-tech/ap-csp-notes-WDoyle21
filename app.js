// If/Else:

const dice1 = 6;
const dice2 = 6;

if (dice1 === 6 && dice2 === 6) {
    console.log("You rolled a double");
} else {
console.log("You didn't");
}

// Objects:

const user = {
    name: "Will",
    age: 24,
    married: false,
    purchases: ["phone", "car", "laptop"],

    sayName: function() {
        console.log(this.name);
    }
}

user.sayName();

function saymyAge(){
    console.log(`My age is ${this}`);
}

saymyAge();

// Switches:

const color = 'yellow';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
         break;
    default:
        console.log('Color is not red or blue');
        break;
}

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log('Today is ${day}');

// Traversy Arrays

const numbers = [1,2,3,4,5,6,7];
const numbers2 = new Array(8,9,10,11,12);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [1, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
numbers[2] = 100;

console.log(numbers);
console.log(val);
