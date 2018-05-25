const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/ComputeLongSum') {
        const compute = fork('ForkChild01.js');
        compute.send('Start');
        compute.on('message', sum => res.end(`Sum Is ${sum}`));
    }
    else {
        res.end('Ok')
    }
});

server.listen(3000);
