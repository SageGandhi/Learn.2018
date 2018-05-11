//Do npm install https
var fileSystem = require("fs"),
    http = require("http");
http.createServer((req,res)=>{//Request:ReadableStream,Response:WritableStream
    console.log(`Request Url:${req.url}:${__dirname}`);
    if(req.url === '/04.BuffersEx'){
        fileSystem.createReadStream(__dirname+'/04.BuffersEx.js').pipe(res);
    }else{
        res.end("Gandhi!!Gandhi!!");
    }
}).listen(process.env.PORT, process.env.IP);
console.log('Server Running!!!');