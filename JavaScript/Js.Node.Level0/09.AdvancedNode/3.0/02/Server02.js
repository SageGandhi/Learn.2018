const http = require('http');
const pid = process.pid;
let usersCount = 0;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++);
    res.write(`Handled By Process ${pid}\n`);
    res.end(`Users: ${usersCount}`);
}).listen(8080, () => console.log(`Started Process ${pid}`));
process.on('message', msg => usersCount = msg.usersCount);
// Kill RandomLy
// setInterval(() => process.exit(1),Math.random() * 10000);
