const { readFile, writeFile } = require("fs");

readFile("./read-write/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
});

writeFile("./read-write/aysnc.txt", "Hello Omar From Aysnc", (err, res) =>
  console.log(res)
);
