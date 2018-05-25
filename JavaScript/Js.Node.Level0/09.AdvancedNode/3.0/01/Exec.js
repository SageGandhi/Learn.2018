//Exec Will Buffered The Data Before Execution,Create A Shell,Data Will Not Be Streamed
const { exec, spawn } = require('child_process');
exec('find . -type f | wc -l', (err, stdout, stderr) => console.log(`Number of files ${stdout}`));

// Shell Mode
spawn('find . -type f', { stdio: 'inherit', shell: true });

// Custom Environment
spawn('echo $Answer', { stdio: 'inherit', shell: true, env: { Answer: 42 } });
//Detached Parent: ps -ef|grep Timer Parent Exit
spawn('node', ['Timer.js'], {detached: true,stdio: 'ignore'}).unref();

//ExecFile:Without Shell