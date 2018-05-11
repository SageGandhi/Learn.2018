var fork = require('child_process').fork,
    childProcess = fork(__dirname+'/ForkChildProcess.js');//Forking Node Based Process
childProcess.on('message',(message)=>{//Receives Message From Child Process
       console.log(`The Answer Is: ${message.Value},Message::${message.Message}`);
       childProcess.send({Command:'Done'});//Send Request To Child Process
});
childProcess.send({Value:20,Command:'Double'});//Send Request To Child Process
