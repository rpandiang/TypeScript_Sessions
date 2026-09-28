console.log("Async TypeScript session started.");

setTimeout(() => {
    console.log("This message is displayed after 5 seconds.");
}, 5000);

console.log("This message is displayed immediately.");



// Demonstrating async behavior with a Promise
const asyncMessage = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("This message is displayed after 3 seconds using a Promise.");
    }, 3000);
});

asyncMessage.then((message) => console.log(message));

