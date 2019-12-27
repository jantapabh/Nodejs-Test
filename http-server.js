const http = require('http');
const server = http.createServer();

// server.listen(3000);
// console.log('Listen form port 3000');


server.addListener('connection', function (req, res) {

    if ( req.url === '/') {
        res.write('You are at home page');
        res.end();
    }
    // console.log('Client connector!');
});

server.addListener('connection', function (socket) {

    console.log('Client connector!');
});


server.listen(3000);
console.log('Listen form port 3000');
