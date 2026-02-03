const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Welcome to Node.js Application");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
