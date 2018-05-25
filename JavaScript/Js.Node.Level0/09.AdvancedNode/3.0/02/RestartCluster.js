const cluster = require('cluster');
const os = require('os');

const numberOfUsersInDB = function() {
    this.count = this.count || 5;
    this.count = this.count * this.count;
    return this.count;
}
if (cluster.isMaster) {
    const cpus = os.cpus().length;
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    console.log(`Master Pid: ${process.pid}`);
    //ab -c200 -t10 http://localhost:8080/
    //Do kill -SIGUSR2 {pid}:SIGUSR1 Used By Node Debugging
    cluster.on('exit', (worker, code, signal) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} Crashed.Starting New Worker...`);
            cluster.fork();
        }
    });

    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);
        const restartWorker = (workerIndex) => {
            const worker = workers[workerIndex];
            if (!worker) return; //No Worker To Restart,Index OverFlowed
            worker.on('exit', () => {
                if (!worker.exitedAfterDisconnect) return; //Only Check If Happened After Disconnecting
                console.log(`Exited Process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(workerIndex++);
                });
            });
            worker.disconnect();
        };
        restartWorker(0);
    });
    const updateWorkers = () => {
        const usersCount = numberOfUsersInDB();
        Object.values(cluster.workers).forEach(worker => worker.send({ usersCount }));
    };
    updateWorkers();
    setInterval(updateWorkers, 10000);
}
else if (cluster.isWorker) {
    require('./Server02');
}
