//Question 1: Reverse a string in TypeScript
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
const reverseGreeting: string = greeting.split("").reverse().join("");
console.log(reverseGreeting);

//Question 2: Arrow function in TypeScript
//a. Greet User using an arrow function
const greetUser = (name: string): string => `Hello, ${name}!`;
console.log(greetUser("Raj"));

//b. Add two numbers using an arrow function
const addNumbers = (a: number, b: number): number => a + b;
console.log(addNumbers(5, 3));

//c. Reverse a string using an arrow function
const reverseString = (str: string): string => str.split("").reverse().join("");
console.log(reverseString("TypeScript"));

