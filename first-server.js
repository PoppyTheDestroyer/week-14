const http = require("http");
const port = 8080;

function responseHandler(request, response) {
    response.end("Hi.");
}

const server = http.createServer(responseHandler);

server.listen(port, function() {
    console.log(`I'm listening`);
    console.error(`Visit http://localhost:${port}`);
});