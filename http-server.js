const http = require('http');
const server = http.createServer(function (req, res) {

    if (req.url === '/') {
        res.write('You are at home page');
        res.end();
    }

});

server.addListener('connection', function (socket) {

    console.log('Client connector!');
});


server.listen(3000);
console.log('Listen form port 3000');
