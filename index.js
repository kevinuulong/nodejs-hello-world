const http = require("http");

// Creates an http server listening on port 8080
http.createServer((req, res) => {
    let greeting;
    // We can use req (defined above) to get information from the HTTP request including the headers and body
    // Here we get the requestor's accepted languages from the headers so we can greet them in their native tongue
    switch (req.headers['accept-language'].split(',')[0]) {
        case 'es':
            greeting = '¡Hola Mundo!'
            break;
        case 'fr':
            greeting = 'Bonjour le monde!'
            break;
        case 'de':
            greeting = 'Hallo Welt!'
            break;
        default:
            greeting = 'Hello, world!'
            break;
    }
    // Sends an HTTP Header
    // We want to set the status to 200: OK
    // We will be responding with plain-text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response with the contents of `greeting` as the body
    res.end(greeting);
}).listen(8080);

console.log('Server live @ http://localhost:8080');