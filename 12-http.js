const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    // res.write("Welcome to our home page");
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    // res.write("Welcome to our home page");
    res.end("Welcome to our about page");
  }
  res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
