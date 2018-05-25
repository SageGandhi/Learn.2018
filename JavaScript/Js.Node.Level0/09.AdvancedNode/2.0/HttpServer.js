const http = require('http').createServer();

http.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Https:Prajit Gandhi\n');
    setInterval(function() { res.write(`Https:${new Date()}\n`); }, 1000);
    setTimeout(function() { res.write('Https:Yet Another Prajit\n'); }, 50000);
});

http.listen(8000);
//curl http://localhost:8000
//openssl req -x509 -newkey rsa:4096 -keyout Rsa4k.pem -out RsaCert.pem -nodes :Generate Certificate,Key
const fs = require('fs');
// Server: http.Server
const https = require('https').createServer({
    key: fs.readFileSync('./Rsa4k.pem'),
    cert: fs.readFileSync('./RsaCert.pem')
});

https.on('request', (req, res) => {
    // Request: http.IncomingMessage
    // Request: http.ServerResponse
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Https:Prajit Gandhi\n');
    setInterval(function() { res.write(`Https:${new Date()}\n`); }, 1000);
    setTimeout(function() { res.write('Https:Yet Another Prajit\n'); }, 50000);
});

https.listen(8443);
//curl https://localhost:8443 --insecure:sudo node HttpServer.js  
var options = {
  host: 'www.google.com',
  port: 80
};

// http.ClientRequest:Request
const req = require('http').get(options, (res) => {
    // Request: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', (data) => { console.log(data.length); });
});
req.on('error', (e) => console.log(e));
console.log(req.agent); // http.Agent

//Url Parser Example
const url = require('url');
console.log(url.parse('https://github.com/SageGandhi?tab=repositories', true));
const urlObject = {
  protocol: 'https:',
  slashes: true,
  host: 'github.com',
  hostname: 'github.com',
  search: '?tab=repositories',
  query: { tab: 'repositories' },
  pathname: '/SageGandhi',
  path: '/SageGandhi?tab=repositories',
  href: 'https://github.com/SageGandhi?tab=repositories' 
};
console.log(url.format(urlObject));
//Query String
const querystring = require('querystring');
console.log(querystring.stringify({name: 'Prajit Gandhi',website: 'https://github.com/SageGandhi/Learn.2018'}));
console.log(querystring.parse('name=Prajit Gandhi&website=https://github.com/SageGandhi/Learn.2018'));
