const express = require("express");
const server = express();
const path = require("path");

server.use("/", express.static(path.join(__dirname, "/app")));
server.listen(3000, function() {
    console.log("Listenting on port 3000");
});