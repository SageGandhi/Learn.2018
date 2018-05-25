const { spawn } = require('child_process');
const child01 = spawn('pwd');
// ecit,disconnect,error,message,close
child01.on('exit',(code,signal)=>console.log(`Child Process Exits:${code} & Signal:${signal}`));
//child01.stdin[Writable],child01.stderr,child01.stdout[Readable]

const child02 = spawn('find', ['.', '-type', 'f']);
child02.stdout.on('data', (data) => console.log(`child stdout:\n${data}`));
child02.stderr.on('data', (data) => console.error(`child stderr:\n${data}`));
child02.on('exit', (code, signal) => console.log(`child process exited with code ${code}, signal ${signal}`));

const child03 = spawn('wc');//Lines,Word,Character
process.stdin.pipe(child03.stdin);//Ctrl+D To Provide Input To Child Process After Type In Parent Process
child03.stdout.on('data', (data) => console.log(`Child Stdout:\n${data}`));

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);
find.stdout.pipe(wc.stdin);
wc.stdout.on('data', (data) => console.log(`Number of files ${data}`));
// Spawn Does Not Create A Shell