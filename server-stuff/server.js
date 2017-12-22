const http = require("http");
const port = 8080;
const fs = require("fs");

function handleResponse(request, response) {
    const path = request.url;
    switch (path) {
        case "/":
            sendPage("index.html", 200, response);
            break;
        case "/bands":
            sendPage("bands.html", 200, response);
            break;
        case "/movies":
            sendPage("movies.html", 200, response);
            break;
        case "/food":
            sendPage("food.html", 200, response);
            break;
        default:
            sendPage("404.html", 404, response)

    }
}
function sendPage(fileName, responseCode, response) {
    fs.readFile(fileName, function (err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(responseCode, {
            "Content-Type": "text/html"
        })
        response.end(data);
    })
}
const server = http.createServer(handleResponse);

server.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`)
})



