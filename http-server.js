const http = require('http');
const server = http.createServer(function (req, res) {
    var obj = {

        name: "Jantapa",
        age: 21,
        city: "Hatyai"
    
    };
    if (req.url === '/') {
        res.write('You are at home page');
        res.end();
    }
    if (req.url === '/contact'){
        res.write(JSON.stringify(obj));
        res.end();
    }

});

server.addListener('connection', function (socket) {

    console.log('Client connector!');
});


server.listen(3000);
console.log('Listen form port 3000');
