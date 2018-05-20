var cluster = require('cluster'),//Do npm install cluster http
    http = require('http'),
    numberOfWorkers = 5;
    
if(cluster.isMaster){//Master Check
    for(var workerIndex = 0;workerIndex<numberOfWorkers;workerIndex++){
        console.log('Master Is About To Forking A Woorker...')
        cluster.fork();
    }
    //Subscribe To Different Event
    cluster.on('fork',(worker)=>console.log(`Master Got Message From Fork Subscription Event For Worker:${worker.id}`));
    cluster.on('online',(worker)=>console.log(`Master Got Message From Online Subscription Event For Worker:${worker.id}`));
    cluster.on('listening',(worker,address)=>console.log(`Master Got Message From Listening Subscription Event For Worker:${worker.id},Pid:${worker.process.pid},Address:${address.address},Port:${address.port}`));
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Master Got Message From Exiting Subscription Event For Worker:${worker.id},Code:${code},Signal:${signal}`);
        cluster.fork();//Create A New Worker If Required        
    });
}else if(cluster.isWorker){//Labour/Worker
    console.log(`Worker Id:${cluster.worker.id}`);
    var countNoOfRequestServiced = 0;
    http.createServer((req,res)=>{
      res.writeHead(200);
      countNoOfRequestServiced++;  
      console.log(`Worker#${cluster.worker.id},Pid:${cluster.worker.process.pid} Serviced No Of Request:${countNoOfRequestServiced}`);
      res.end(`Worker#${cluster.worker.id},Pid:${cluster.worker.process.pid},Serviced No Of Request:${countNoOfRequestServiced}`);
        if(countNoOfRequestServiced===5){
            cluster.worker.destroy();//Destroying Worker After Serviced 5 Request
        }
        //Use curl http://localhost:8080 For Simulation,Use process.env.PORT,process.env.IP For Cloud9 Ide
        //}).listen(process.env.PORT,process.env.IP);
      }).listen(8080);
}