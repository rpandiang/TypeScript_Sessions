console.log("Hello, TypeScript!");

const name: string = "World";
console.log(`Hello, ${name}!`);

let x;
console.log(typeof x); // Output: undefined

let y = 10;
console.log(typeof y); // Output: number

let empids: Array<number> = [101, 102, 103];
for (const id in empids) {
    console.log(empids[id]); // Output: 101, 102, 103
}

for (const empid of empids) {
    console.log(empid); // Output: 101, 102, 103
}

empids.forEach((empid) => {
    console.log(empid); // Output: 101, 102, 103
});

const frontEnd: string[] = ["HTML", "CSS"];
const backEnd: string[] = ["Node.js", "Express"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack); 
// Output: ["HTML", "CSS", "Node.js", "Express"]