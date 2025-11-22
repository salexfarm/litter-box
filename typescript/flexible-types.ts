// 17. The "any" Type
let age: any = 36;

age = '37';
age = false;
age = {}; // object
age = []; // array


// 18. Understanding Union Types
let myAge: string | number = 36;
myAge = '37';
// myAge = false;
// myAge = {};
// myAge = [];

console.log(age);