// Server set-up
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html", (err, html) => {
      if (err) throw err;
      res.end(html);
    });
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./about.html", (err, html) => {
      if (err) throw err;
      res.end(html);
    });
  } else if (req.url === "/contact-me") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./contact-me.html", (err, html) => {
      if (err) throw err;
      res.end(html);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./404.html", (err, html) => {
      if (err) throw err;
      res.end(html);
    });
  }
});
server.listen(3000, () => {
  console.log(`Server running at 300`);
});
