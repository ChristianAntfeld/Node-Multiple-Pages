const http = require('http');
const fs = require('fs').promises;

var requestListener = function(req, res) {
  switch(req.url) {
    case "/index.html":
      fs.readFile(__dirname + "/index.html")
        .then(index => {
          res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(index);
        });
        break;
    case "/404.html":
      fs.readFile(__dirname + "/404.html")
        .then(missingPage => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(missingPage);
        });
        break;
    case "/about.html":
      fs.readFile(__dirname + "/about.html")
        .then(about => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(about);
        });
        break;
    case "/contact-me.html":
      fs.readFile(__dirname + "/contact-me.html")
      .then(contact => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contact);
      });
      break;
}}

// Create a local server to receive data from
// const server = http.createServer(requestListener) {}

const server = http.createServer(requestListener);
server.listen(8080);