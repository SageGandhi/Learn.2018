var childProcessModule = require("child_process").exec,
    childProcessModuleInstance = childProcessModule('uptime',(error,stdout,stderr)=>{
        //stderr/stdout Acailable Only When Process Completes
       if(error)console.log(`Error Occured While Trying To Execute Uptime Via Exec:${error}`) ;
       else console.log(`Output : ${stdout}`);
    });
console.log(`Child Process Pid Is :${childProcessModuleInstance.pid}`);