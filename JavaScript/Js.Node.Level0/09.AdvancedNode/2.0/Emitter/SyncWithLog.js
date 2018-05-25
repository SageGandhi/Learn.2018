const { EventEmitter } = require('events');
const fs = require('fs');
class WithLog extends EventEmitter {
    execute(taskFunc) {
        console.log('Before Executing');
        this.emit('Begin');
        taskFunc();
        this.emit('End');
        console.log('After Executing');
    }
}

const withLog = new WithLog();

withLog.on('Begin', () => console.log('About 2 Execute'));
withLog.on('End', () => console.log('Done With Execute'));
withLog.on('Begin', () => console.log('About 2 Execute:Twice'));
withLog.on('End', () => console.log('Done With Execute:Twice'));
withLog.execute(() => console.log('*** Executing Task ***'));

class WithLogAsync extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('Execute');
        console.log('Before Executing');
        this.emit('Begin');
        asyncFunc(...args, (err, data) => {
            if (err) return this.emit('Error', err);
            this.emit('Data', data);
            this.emit('End');
            console.log('After Executing');
        });
        console.timeEnd('Execute');
    }
}
const withLogAsync = new WithLogAsync();

withLogAsync.on('Begin', () => console.log('About 2 Execute Async'));
withLogAsync.on('End', () => console.log('Done With Execute Async'));
withLogAsync.on('Data', (data)=>console.log(data.length));
withLogAsync.on('Error', console.log);
withLogAsync.once('uncaughtException', (err)=>{
    console.log(err);
    process.exit(1);
});
withLogAsync.execute(fs.readFile, __filename);
