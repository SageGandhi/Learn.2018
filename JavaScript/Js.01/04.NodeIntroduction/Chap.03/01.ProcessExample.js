process.stdin.resume();//By Default StdIn Start Paused
process.stdin.setEncoding('utf-8');
process.stdin.on('data',(chunk)=>process.stdout.write('<<Data>>'+chunk));
process.stdin.on('end',()=>process.stderr.write('<<End>>'));
//Run From Terminal:node 01.ProcessExample.js & Type & Press Ctrl+D Once Done Typing
//Run From Terminal:node 01.ProcessExample.js & Type & Do kill -TERM <<ProcessId>> In Another Terminal
process.on('SIGTERM',()=>process.stderr.write('Why Are You Trying To Terminate Me?'));
console.log(`Use This Pid To Terminate The Process:${process.pid}`);