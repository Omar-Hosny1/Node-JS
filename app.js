const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("home page");
  } else if (req.url == "/about") {
    res.end("about page");
  } else {
    res.end("error page");
  }
});

server.listen(5000, () => {
  console.log("Server is listening");
});
