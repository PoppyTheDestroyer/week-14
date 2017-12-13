const http = require("http");
const portA = 7000;
const portB = 7500;

function responseHandlerA(request, response) {
    response.end("You're great!");
};

function responseHandlerB(request, response) {
    response.end("Bad news: You suck.")
}

const serverA = http.createServer(responseHandlerA);
const serverB = http.createServer(responseHandlerB);
serverA.listen(portA, function() {
    console.log("I hear you, you awesome person!")
    console.error(`Visit http://localhost:${portA}`)
});
serverB.listen(portB, function() {
    console.log("I hear you, jerk.");
    console.error(`Visit http://localhost:${portB}`)
})
