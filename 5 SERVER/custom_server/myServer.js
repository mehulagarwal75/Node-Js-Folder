// const os = require('os');

// console.log("CPUs : ",os.cpus().length);

const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
    const msg = `New User ${new Date()} IP address : ${req.socket.remoteAddress}\n`;
    fs.appendFile("./log.txt", msg, (err) => {});

    console.log(req.url);
    let fileName = "";

    switch (req.url) {
        case "/":
            fileName = "index.html";
            break;
        case "/contact" :
            fileName = "contact.html";
            break;   
        default:
            fileName = "404.html";
            break;
    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(8080, (error) => {
    if (error) {
        console.log("server is not started on port", error);
        return;
    }
    console.log("server is started.....");
});


