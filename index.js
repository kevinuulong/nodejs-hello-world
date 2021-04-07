const http = require("http");

// Creates an http server listening on port 8080
http.createServer((req, res) => {
    // Sends an HTTP Header
    // We want to set the status to 200: OK
    // We will be responding with plain-text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response with 'Hello, world!' as the body
    res.end('Hello, world!');
}).listen(8080);

console.log('Server live @ http://localhost:8080');