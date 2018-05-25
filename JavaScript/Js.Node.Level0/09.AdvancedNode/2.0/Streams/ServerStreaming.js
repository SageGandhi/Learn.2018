const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => fs.createReadStream('./TooBig.file').pipe(res));
server.listen(8000);
