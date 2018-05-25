const server = require('net').createServer();
let clientIndex = 0;
let sockets = {};
function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}
server.on('connection', socket => {
    console.log('Client Connected');
    // socket.write('Welcome New Client!\n');
    socket.write('Please Type Your Name: ');
    socket.id = clientIndex++;

    socket.on('data', data => {
        console.log(`Data Received From Client:${socket.id}:`, data);
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }
        //Run With node --harmony Net.js 
        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id === key) return;
            cs.write(`${socket.name} ${timestamp()}: `);
            cs.write(data);
        });
        // socket.write(`${socket.id}:`);
        // socket.write(data);//Default Utf-8 Ebcoding
    });
    socket.setEncoding('utf8');//Global Encoding Set
    socket.on('end', () => {
        console.log('Client Disconnected');
        delete sockets[socket.id];
    });
});

server.listen(8000, () => console.log('Server Started..'));
//In PowerShell:New-Object System.Net.Sockets.TcpClient("127.0.0.1", 8000)
//nc localhost 8000:In Cloud9 Io Web Ide