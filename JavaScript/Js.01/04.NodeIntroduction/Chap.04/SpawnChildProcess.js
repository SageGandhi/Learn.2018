var childProcessModule = require("child_process").spawn,
    ps = childProcessModule('ps',['ax']),
    grep = childProcessModule('grep',['bash']);
//stderr/stdout Acailable Only While Process Is Running
ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data',(data)=>console.log(`Ps Stderr: ${data}`));
grep.stderr.on('data',(data)=>console.log(`Grep Stderr: ${data}`));

console.log(`Child Process Pid Is :${ps.pid} & ${grep.pid}`);