// 19. Arrays & Types

let hobbies = ['Sports', 'Cooking'];
//hobbies.push(10);

// 20. Advanced Array Types
let users: (string | number)[];
users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];

console.log(users);
console.log(users);

let tempArray: (number | string)[] = ["cat", "in", 5, "Hats"];
console.log(tempArray);

// 21. A First Glimpse At Generic Types
let user2: Array <string | number>;
user2 = [1, "Max"];
user2 = [5, 1];
user2 = ["Max", "Anna"];

// 22. Making Sense of Tuples

let possibleResults: [number, number]; // [1, -1]
possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let testArray: [boolean, boolean] = [true, false];
console.log(testArray);

let abc: [number | boolean];
abc = [65];

console.log(abc);