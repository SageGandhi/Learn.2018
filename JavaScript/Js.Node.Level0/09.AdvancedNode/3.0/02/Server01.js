const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++);
    res.end(`Handled By Process ${pid}`);
}).listen(8080, () => console.log(`Started Process ${pid}`));
process.on('message', msg => console.log(msg));
