const http = require("http");
const port = 8080;

function displayRoot(path, request, response) {
    const html = `<html>
    <body>
    <h1>Homepage</h1>
    <a href="/portfolio">Portfolio</a>
    </body>
    </html>`;
    response.writeHead(200, {
        "Content-Type":
            "text/html"
    });
    response.end(html)
};

function displayPortfolio(path, request, response) {
    const html = `<html>
    <body>
    <h1>Portfolio</h1>
    <a href="/">Home</a>
    </body>
    </html>`;
    response.writeHead(200, {
        "Content-Type":
            "text/html"
    });
    response.end(html)
};

function display404(path, request, response) {
    const html = `<html>
    <body>
    <h1>404 Error: Not Found</h1>
    <a href="/">Home</a>
    </body>
    </html>`;
    response.writeHead(404, {
        "Content-Type":
            "text/html"
    });
    response.end(html)
}

function handleRequest(request, response) {
    const path = request.url;

    switch (path) {
        case "/":
            displayRoot(path, request, response)
        case "/portfolio":
            displayPortfolio(path, request, response)
        default:
            display404(path, request, response)
    }
}

const server = http.createServer(handleRequest);

server.listen(port, function () {
    console.log("Listening!");
    console.log(`Visit me at http://localhost:${port}`);
});