# nodejs-hello-world

Super simple node.js sample.

## Multi Language Example

---

Here is a short example showing you how to use information from the request to return a better response. In this example we check the requestor's language header to return a personalized greeting for their native tongue.

```js
const http = require("http");

// Creates an http server listening on port 8080
http.createServer((req, res) => {
	let greeting;
	// We can use req (defined above) to get information from the HTTP request including the headers and body
	// Here we get the requestor's accepted languages from the headers so we can greet them in their native tongue
	switch (req.headers["accept-language"].split(",")[0]) {
		case "es":
			greeting = "¡Hola Mundo!";
			break;
		case "fr":
			greeting = "Bonjour le monde!";
			break;
		case "de":
			greeting = "Hallo Welt!";
			break;
		default:
			greeting = "Hello, world!";
			break;
	}
	// Sends an HTTP Header
	// We want to set the status to 200: OK
	// We will be responding with plain-text
	res.writeHead(200, { "Content-Type": "text/plain" });

	// Send the response with the contents of `greeting` as the body
	res.end(greeting);
}).listen(8080);

console.log("Server live @ http://localhost:8080");
```

## What else can you do?

---

Just about anything! You can build a simple to-do list that hooks into a database, or even realtime chats and games and so much more! Node.js is extremely versatile and the `http` module is only a small portion of the tools available to you! I could include a cheesy cliche about the world being your oyster, or I could [link you to this useful article with some good starter project ideas](https://dev.to/hb/7-fullstack-projects-you-need-to-make-in-2021-bdn)!
