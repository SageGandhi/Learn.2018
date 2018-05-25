const os = require('os');
console.log(os.EOL, os.arch(), os.constants, os.cpus(), os.endianness(), os.freemem(), os.homedir(), os.hostname(), os.loadavg(),
    os.networkInterfaces(), os.platform(), os.release(), os.tmpdir(), os.totalmem(), os.type(), os.uptime(), os.userInfo());

const fs = require('fs');
// Asynchronous Form:
fs.readFile(__filename, (err, data) => {if (err) throw err;});
// Synchronous Form:
const data = fs.readFileSync(__filename);
// Exceptions Are Immediately Thrown
