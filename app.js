// const http = require("http");

/* const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello! Welcome to our server!");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is runing port:${PORT}`);
}); */

//JSON-http

/* const serverBd = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const jsonRes = {
    text: "Hello! Bangladesh",
    postTime: new Date().toLocaleDateString(),
  };

  res.end(JSON.stringify(jsonRes));
}); */

// HTML-http

/* const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const htmlRes = `
    <div>
      <p>Hi! This is a HTML sever!</p>
    </div>
  `;
  res.end(htmlRes);
});

const PORT = 9999;

server.listen(PORT, () => {
  console.log(`Bd server is runing on port:${PORT}`);
}); */

//URL-http

/* const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to home!");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to about!");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to contact!");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("ERR! Page not found!");
  }
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Sarver is runing on port:${PORT}`);
}); */

console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 4000);

process.nextTick(() => {
  console.log("Executed 1");
});

process.nextTick(() => {
  console.log("Executed 2");
});

console.log("End");
