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

let array1 = [1, 2, 3, 4, 5];
console.log(array1);

let array2 :(string | number | boolean)[] = ["cat", "in", 5, true, "Hats"];

let array3 = [[[1, 6, 6, 1, 4], [21, 52, 23, 23, 2], [24, 14, 14, 24, 4]], [[2, 41, 4, 4], [24, 24, 1]], [[3, 24, 4, 25], [23, 24, 14], [23, 24, 14], [23, 24, 14]]]
console.log(array3);

// 23. Object Types

let users1: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Max',
    age: 38,
    hobbies: ['Cooking', 'Swimming'],
    role: {
        description: 'admin',
        id: 5
    }
};


