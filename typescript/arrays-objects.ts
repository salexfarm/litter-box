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
        id: 5,
    }
};

// 24. The "Must Not Be Null" Types
let val: {} = {}
let val2: {} = "abc"; // looks like an empty object when used as a type, but means not any value undefined/null
const someObj = {}; // this would be an empty object

// 25. Flexible Objects with the Record Type
let data: {} = 'is a value';

let data2: Record<string, number | string>; // Use this to define your key value pairs

data2 = {
    entry1: 1,
    entry2: 'some string'
};

// 26. Working with Enums
enum Role {
    Admin, // 0 or you can assign them your own numbers or even strings
    Editor, // 1
    Guest // 2
}

enum Role2 {
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest",
}

let userRole: Role = Role.Admin; // 0 => Admin, 1 => Guest
console.log(Role);

userRole = Role.Guest;


console.log(userRole);

// 27. Being Specific With Literal Types
let userRole2: "admin" | "editor" | "guest" = "admin";
userRole2 = "admin";

console.log(userRole2);







