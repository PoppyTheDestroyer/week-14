const http = require("http");
const fs = require("fs");
const port = 8080;

function handleRequest(request, response) {
    fs.readFile("index.html", function(err, data) {
        if(err) {
            throw err;
        }
        response.writeHead(200, {
            "content-Type": "text/html"
        });
        response.end(data);
    })
}

const server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log("I hear you");
    console.log(`Visit http://localhost:${port}`)
})