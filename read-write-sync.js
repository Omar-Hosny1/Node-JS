const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./read-write/first.txt", "utf-8");

console.log(first);

writeFileSync("./read-write/firstHello.txt", "Hello Omar");
