// process Is EventEmitter
process.on('exit',(code)=>{
    // Only Synchronous Operation/Last Operation Before Process Exits
    console.log(`About To Exit With Code: ${code}`);
});
process.on('uncaughtException',(code)=>{
    // Do Clean Up & Deliberate Exit,Otherwise Node Will Will Exist Anyway
    console.log(`UncaughtException: ${code}`);
    console.error(`UncaughtException: ${code}`);
    // Comment Followin Line,Check Node Is Still Running
    process.exit(500);
});
//Keep Event Loop Busy:Switching The Stream Into Flowing Mode?
process.stdin.resume();
// Do node .\Process.js
console.err("TypeError UncaughtException");