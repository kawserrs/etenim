// Assume ingest$1 is defined somewhere in the code or imported
function ingest$1(value) {
    return { data: value }; // Example transformation or processing
}

// Example usage
let curr = [];

function processItem(t) {
    curr.push(ingest$1(t));
}

// Calling the function
processItem("example");

console.log(curr); // Output: [{ data: "example" }]
