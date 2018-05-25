const server = require('net').createServer();

server.on('connection', socket => {
    console.log('Client Connected');
    socket.write('Welcome New Client!\n');
    socket.on('data', data => {
        console.log('Data Received From Client:', data);
        socket.write('Received: ');
        socket.write(data);
    });
    socket.on('end', () => console.log('Client Disconnected'));
});

server.listen(8000, () => console.log('Server Started..'));
//In PowerShell:New-Object System.Net.Sockets.TcpClient("127.0.0.1", 8000)