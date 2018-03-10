var http = require("http");

var PORT = 7000;
var PORTTWO = 7600;

function handleRequest(request, response) {
    response.end("I am a very hard worker!");
}

function handleRequestTwo(request, response) {
    response.end("I am a terible student.  :(");
}

var server = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequestTwo);

server.listen(PORT, function () {
    console.log(PORT + " Working");
});
serverTwo.listen(PORTTWO, function () {
    console.log(PORTTWO + " Working");
});
