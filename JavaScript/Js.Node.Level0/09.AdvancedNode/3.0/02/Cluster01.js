// Use Apache BenchTool:sudo apt-get update,sudo apt-get install apache2-utils
//ab -c200 -t10 http://localhost:8080/ & Do curl http://localhost:8080/
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Forking For ${cpus} Cpus`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  console.dir(cluster.workers, { depth: 0 });
  //sudo apt-get install -y nodejs >7 Version,Use nvm install v10.1.0,nvm alias default v10.1.0
  for (let workerIndex in cluster.workers) {
    console.log(workerIndex);
    cluster.workers[workerIndex].send(`Hello Worker:${cluster.workers[workerIndex]}`);
  }
}
else if (cluster.isWorker) {
  require('./Server01');
}
