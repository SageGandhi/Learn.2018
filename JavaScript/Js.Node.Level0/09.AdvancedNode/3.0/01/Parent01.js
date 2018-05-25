const { fork } = require('child_process');
const forked = fork('Child01.js');
forked.on('message', (msg) => console.log('Message From Child', msg));
forked.send({ Name: 'Prajit Gandhi' });
