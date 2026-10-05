
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

const person = new Person('John', 30);
console.log(person.greet());

///

interface Book{
    title: string;
    author: string;
    pages: number;
}

const myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};

console.log(`The book "${myBook.title}" is written by ${myBook.author} and has ${myBook.pages} pages.`);