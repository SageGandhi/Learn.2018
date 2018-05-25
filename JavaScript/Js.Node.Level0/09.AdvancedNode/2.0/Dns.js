const dns = require('dns'); // Name -- Addresses:Os Support Used,No Network Call For Lookup Method

dns.lookup('ide.c9.io', (err, address) => { console.log(address); });
dns.resolve4('ide.c9.io', (err, address) => { console.log(address); });
dns.resolveMx('google.com', (err, address) => { console.log(address); });//Mail Exchange
dns.reverse('35.161.75.227', (err, hostnames) => { console.log(hostnames); });

const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';
const server = dgram.createSocket('udp4');
//Server
server.on('listening', () => console.log('Udp Server Listening'));
server.on('message', (msg, remoteInfo) => console.log(`${remoteInfo.address}:${remoteInfo.port} - ${msg}`));
server.bind(PORT, HOST);
// Client
const client = dgram.createSocket('udp4');
const msg = Buffer.from('Prajit Learns Udp');
client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) console.log(err); 
    console.log('UDP Message Sent'); 
    client.close(); 
});
