# nodejs-hello-world

Super simple node.js sample.

## Install Node.js and NPM

---

You can [download and install Node.js from here](https://nodejs.org/en/download/). Download the LTS version for your platform and then run the installer, follow all on screen instructions. By default an updated version of NPM comes installed with Node.js.

## Checking for Node.js and NPM

---

Run the following command(s) to see if you have node.js and npm installed and on your PATH:

```ps1
node -v; npm -v
```

Sample Output:

```
v12.16.0
6.13.4
```

If you receive errors ensure that you have added node.js and npm to your PATH. You can also [reinstall it](https://nodejs.org/en/download/).

## Getting Started

---

Navigate to your project directory (you may want to make a new one)\
**Ex:**

```ps1
mkdir hello-world; cd .\hello-world\
```

Run the following command to start a new Node.js project using the default options:

```ps1
npm init -y
```

Sample Output:

```
Wrote to .\hello-world\package.json:

{
  "name": "nodejs-hello-world",
  "version": "1.0.0",
  "description": "Super simple node.js sample.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kevinuulong/nodejs-hello-world.git"
  },
  "keywords": [],
  "author": "Kevin Long <kevinuulong@gmail.com> (https://kevinuulong.com)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/kevinuulong/nodejs-hello-world/issues"
  },
  "homepage": "https://github.com/kevinuulong/nodejs-hello-world#readme"
}
```

## Writing the Script

---

While you can technically do all the following steps in the terminal I will be switching over to my IDE of choice VSCode. This will open your current directory in VSCode (you can also use the GUI to navigate here and can use any editor of your choice)

```ps1
code . .
```

**Keep the terminal window open** as we will be using it again later.

### Creating an Entry Point

---

Make a new file named `index.js`

### Importing Modules

We now need to use Node.js' built in `http` module. Add the following to your new file:

```js
const http = require("http");
```

This is the most common way to take advantage of the wide variety of modules available for Node.js (NOTE: many will require an install however `http` is built into Node.js by default)

### Creating a Server

Now that we have required the `http` module we can create a server using the `createServer()` function of `http`. Add the following code to your `index.js`:

```js
// Creates an http server listening on port 8080
http.createServer((req, res) => {
	// Sends an HTTP Header
	// We want to set the status to 200: OK
	// We will be responding with plain-text
	res.writeHead(200, { "Content-Type": "text/plain" });

	// Send the response with 'Hello, world!' as the body
	res.end("Hello, world!");
}).listen(8080);

console.log("Server live @ http://localhost:8080");
```

## Testing the Server

---

Switch back to your terminal window and run the following command:

```ps1
node index.js
```

Navigate to [http://localhost:8080](http://localhost:8080) in your browser.

You should see a page with a message: `Hello, world!`

### [Next (Multi Language Example) ➡️](https://github.com/kevinuulong/nodejs-hello-world/tree/multi-language)
