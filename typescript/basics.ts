// Section 2

// 11. Using Node.js To Run JavaScript Code

/**
 * In this and many other sections, I'll occasionally run compiled code with Node.js - simply to save us the hassle of
 *
 * building a (demo) website that loads and executes that code.
 *
 * You can install the Node.js runtime from https://nodejs.org/en (it's available for all operating systems).
 *
 * This runtime allows you to run JavaScript code right on your system (via the node command) instead of requiring a
 *
 * website. So when you see me run node app.js (or some other file), that's me using Node.js to execute the code.
 **/

// 12. Project Setup

console.log('Hello World!');
console.log("Hello World!");

// 13. Working with Types & Exploring Built-in Types

let userName: string; // explicit type assignment also called type annotation
let userAge: number;
let userDrinkingAge: boolean;

userName = 'Max';
userAge = 5;
userDrinkingAge = true;


// 14. Vanilla JavaScript Has Types, Too!

console.log("See vanilla-js-types.js file");


// 15. Type Inference vs Type Assignment

let usersName: string;
let usersAge = 38;

usersName = 'Jess';
// usersAge = '50'; <-- This would become a string

console.log(usersName, usersAge, typeof usersAge);

// 16. Assigning Types to Function Parameters

let driverSpeed: number;
let driverSpeedIncrement: number;

// function add (a: number, b: number) {
//     return a + b;
// }

function add(driverSpeed: number, b = 10) {
    return driverSpeed + b;
}

console.log(add(30)); // 40
console.log(add(26, 40)); // 60
console.log(add('10')); // 1010
console.log(add(10, '6')); // 106
console.log(add(6, '10')); // 610
console.log(add(16, 51, 62, 120)); // 67
