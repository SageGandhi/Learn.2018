process.on('message', (msg) => console.log('Message From Parent:', msg));
setInterval(() => process.send({ Time: new Date() }), 1000);
