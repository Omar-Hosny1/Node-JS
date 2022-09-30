const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our home page");
  }
  if (req.url == "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`<h1>Hello Body There is no One Here</h1>`);
});

server.listen(5000);
