var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Develop Node Application Using Cloud9');
}).listen(process.env.PORT);
// https://workspace-dev-prajitgandhi.c9users.io/