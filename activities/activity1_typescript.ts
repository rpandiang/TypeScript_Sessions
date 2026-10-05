//TypeScript Activity sheet - https://cognizantonline-my.sharepoint.com.mcas.ms/:w:/g/personal/2422034_cognizant_com/IQAzxh_oiQ1lSrL0E-8GuZYhAXFpXyvmBpRx-Ulu3hsI7T0?wdExp=TEAMS-TREATMENT&web=1&isSPOFile=1&ovuser=de08c407-19b9-427d-9fe8-edf254300ca7%2C208629%40cognizant.com&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtV2ViIiwiQXBwVmVyc2lvbiI6IjE0MTUvMjYwODEzMTkzMTkiLCJIYXNGZWRlcmF0ZWRVc2VyIjpmYWxzZX0%3D

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



//Question 3: class in TypeScript
class Car {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }

    displayBrand(){
    console.log(`My car brand is ${this.brand}`);
}
}

const myCar = new Car("Toyota");
myCar.displayBrand();

//Sub Class
class ElectricCar extends Car {
    constructor(brand: string, public batteryCapacity: string) {
        super(brand);
    }

    displayBrand() {
        console.log(`My electric car brand is ${this.brand} and it has a battery capacity of ${this.batteryCapacity}`);
    }
}

const myElectricCar = new ElectricCar("Tesla", "100kWh");
myElectricCar.displayBrand();


//Question 4: Interface in TypeScript
interface CarFeatures {
    brand: string;
}

interface AutonomousFeatures {
    autopilotEnabled: boolean;
}

class SelfDrivingCar implements CarFeatures, AutonomousFeatures {
    constructor(public brand: string, public autopilotEnabled: boolean) {
    }
}

const mySelfDrivingCar = new SelfDrivingCar("Rivian", true);

console.log(`My self-driving car brand is ${mySelfDrivingCar.brand} and autopilot is ${mySelfDrivingCar.autopilotEnabled ? "enabled" : "disabled"}`);


//Question 5:

class Car2 {
    public brand: string;
    private engineNumber: number;
    protected manufactureYear: number;

    constructor(brand: string, engineNumber: number, manufactureYear: number) {
        this.brand = brand;
        this.engineNumber = engineNumber;
        this.manufactureYear = manufactureYear;
    }

    getCarInfo() {
        console.log(`Car Brand: ${this.brand}, Engine Number: ${this.engineNumber}`);
    }
}

class LuxuryCar2 extends Car2 {
    constructor(brand: string, engineNumber: number, manufactureYear: number, public featurePackage: string) {
        super(brand, engineNumber, manufactureYear);
        this.featurePackage = featurePackage;
    }

    getFullDetails() {
        console.log(`Car Brand: ${this.brand}, Manufacture Year: ${this.manufactureYear}, Feature Package: ${this.featurePackage}`);
    }
}

const myCar2 = new LuxuryCar2("Jeep", 10001, 2026, "Premium");
myCar2.getFullDetails();


//Question 6: List
let studentNames: string[] = ["Chris", "John", "Mike"];
let nameTags: string[] = studentNames.map(name => `Hello, ${name}!`);
console.log(nameTags);

//Question 7: 

class Book {
    constructor(
        public title: string,
        public author: string,
        public year: number,
        public genre: string
    ) {}
}


let book1 = new Book("bookTitle1", "Harper Lee", 1960, "Fiction"); 
let book2 = new Book("bookTitle2", "George Orwell", 1949, "Dystopian"); 
let book3 = new Book("bookTitle3", "F. Scott Fitzgerald", 1925, "Classic"); 

let bookCollection: Book[] = [book1, book2, book3];

let newBook = new Book("bookTitle4", "J.K. Rowling", 1997, "Fantasy");
bookCollection.push(newBook);

bookCollection.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`));

let orwellBooks: Book[] = bookCollection.filter((book: Book): boolean => book.author === "George Orwell");
orwellBooks.forEach((book: Book) => console.log(`Found: ${book.title}`));

bookCollection = bookCollection.filter((book: Book): boolean => book.title !== "bookTitle1");
console.log("Updated book collection after removal");
bookCollection.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`));
