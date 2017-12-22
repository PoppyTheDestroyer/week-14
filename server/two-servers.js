const http = require("http");
const inquirer = require("inquirer");
const portA = 7000;
const portB = 7500;

inquirer
.prompt([
    {
        type: "list",
        message: "Which server which you like to use?",
        choices: ["7000", "7500"],
        name: "serverChoice"
    }
])
.then(function (inquirerResponse) {
    if (inquirerResponse.serverChoice === "7000") {
        serverA.listen(portA, function() {
            console.log("I hear you, you awesome person!")
            console.error(`Visit http://localhost:${portA}`)
        });
    }
    if (inquirerResponse.serverChoice === "7500") {
        serverB.listen(portB, function() {
            console.log("I hear you, jerk.");
            console.error(`Visit http://localhost:${portB}`)
        })
    }
})
function responseHandlerA(request, response) {
    response.end("You're great!");
};

function responseHandlerB(request, response) {
    response.end("Bad news: You suck.")
}

const serverA = http.createServer(responseHandlerA);
const serverB = http.createServer(responseHandlerB);


