//callback

type Data = string;

export function fetchData(callback: (data: Data) => void): void {
    setTimeout(() => {
        console.log("Fetching data...");
        const data: Data = "Data from server";
        callback(data);
    }, 5000);
}

fetchData((data) => {
    console.log("Received data:", data);
});

