const { EventEmitter } = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.tasks = {};
        this.taskId = 1;
        //This Time Event Handler Is Not Registerd Yet,Used Process.nextTick
        process.nextTick(() => this.emit('Response', 'Type Command:Use Help To List All Commands'));
        client.on('Command', (command, args) => {
            switch (command) {
                case 'Help':
                case 'Add':
                case 'List':
                case 'Delete':
                    this[command](args);
                    break;
                default:
                    this.emit('Response', 'Unknown Command...');
            }
        });
    }
    Help() {
        this.emit('Response', `Available Commands:Add [Task Details]/List/Deletep[Id]`);
    }
    Add(args) {
        args = args || [];
        this.tasks[this.taskId] = args.join(' ');
        this.emit('Response', `Added Task ${this.taskId}:${args}`);
        this.taskId++;
    }
    List() {
        this.emit('Response', `Tasks:\n${this.tasksString()}`);
    }
    Delete(args) {
        delete(this.tasks[args[0]]);
        this.emit('Response', `Deleted Task ${args[0]}`);
      }
    tasksString() {
        return Object.keys(this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`;
        }).join('\n');
    }
}
module.exports = (client) => new Server(client);