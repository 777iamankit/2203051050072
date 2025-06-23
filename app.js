const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const querystring = require("querystring");

const users = {};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method.toLowerCase();



  if (pathname === "/register" && method === "get") {
    serveFile(res, "./public/register.html");
  } else if (pathname === "/register" && method === "post") {
    parseBody(req, (data) => {
      const { username, password } = data;
      if (users[username]) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Username already exists!");
      } else {
        users[username] = password;
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Registration successful!");
      }
    });



  } else if (pathname === "/login" && method === "get") {
    serveFile(res, "./public/login.html");
  } else if (pathname === "/login" && method === "post") {
    parseBody(req, (data) => {
      const { username, password } = data;
      if (users[username] && users[username] === password) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Login successful!");
      } else {
        res.writeHead(401, { "Content-Type": "text/plain" });
        res.end("Invalid credentials.");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});



function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function parseBody(req, callback) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => callback(querystring.parse(body)));
}


server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
