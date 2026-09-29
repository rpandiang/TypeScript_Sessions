// 3 phases of a Promise: pending, fulfilled, rejected
// Example of creating and using a Promise
function deliverFood() {
    let trafficJam = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (trafficJam) {
                reject("Delivery failed due to traffic jam.");
            } else {
                resolve("Food delivered successfully!");
            }
        }, 5000);
    });
}

deliverFood()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });