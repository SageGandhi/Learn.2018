const fs = require('fs');
fs.readFile(__filename, () => {
    setTimeout(() => console.log('setTimeout'), 0);
    setImmediate(() => console.log('setImmediate'));//Next Tick Of Event Loop
});
//Process.nextTick-After The Current Operation Completes & Before The EventLoop Kicks In.This Does Not Care About Event Loop Phases.
//Event Loop Phase:Timers->Io Callback->Idle/Prepare->Poll[Incoming Connection/Data]->Check->Close Callback->Timers.
function fileSize(fileName, callback) {
    if (typeof fileName !== 'string') return process.nextTick(callback, new TypeError('Argument Should Be String'));
    fs.stat(fileName, (err, stats) => {
        if (err) return callback(err);
        callback(null, stats.size);
    });
}
fileSize(__filename, (err, size) => {
    if (err) throw err;
    console.log(`Size In Kb: ${size / 1024}`);
});
fileSize(247119, (err, size) => {
    if (err) console.error(err);
    console.log(`Size In Kb: ${size / 1024}`);
});
console.log('After EveryThingCompletes!'); 