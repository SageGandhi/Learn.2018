//Do npm install http socket.io
var http = require('http'),
    socketio = require('socket.io'),
    fileSystem = require('fs');
//Handler Always Returns Index.html
var handleRequestReturnIndex = (req,res)=>{
    //Request:ReadableStream,Response:WritableStream
    console.log(`Request Url:${req.url}:${__dirname}`);
    fileSystem.readFile('Index.html',(error,content)=>{
       if(error){
            res.writeHead(500);
            return res.end('Error Loading Index.html');
       }else{
            res.writeHead(200);
            res.end(content);
       }
    });
};
//SocketIo Listens To App=>App Listens To Http Server Host:Port
var app = http.createServer(handleRequestReturnIndex),
    io = socketio.listen(app);
//Subcribe
io.sockets.on('connection',(socket)=>{
    setInterval(()=>{
        var timesNow = new Date();
        console.log(`Emitting ${timesNow}`);
        //Publish
        socket.emit('TimesNow',timesNow);
    },1000);
    //Subscribe
    socket.on('SubmitData',(data)=>{
       console.log(`Received Data:${data}`); 
    });
});
//Start Listening  For Application HttpServer
app.listen(process.env.PORT, process.env.IP);
console.log('Server Running!!!');