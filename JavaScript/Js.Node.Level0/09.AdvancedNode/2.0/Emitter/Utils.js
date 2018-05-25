const fs = require('fs');
const out = fs.createWriteStream('./Out.log');
const err = fs.createWriteStream('./Err.log');
const consoleCustom = new console.Console(out, err);
setInterval(() => {consoleCustom.log(+new Date());consoleCustom.error(new Error('ConsoleCustom'));}, 5000);

const util = require('util');
const EventEmitter = require('events');

util.deprecate(function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
}, 'puts: Use console.log instead');
//Old Way Via Prototype Chain
function CustomEmitter01() {}
util.inherits(CustomEmitter01, EventEmitter);
CustomEmitter01.prototype.write = (data)=> this.emit('data', data);
//Now 
class CustomEmitter02 extends EventEmitter {
  constructor() {super();}
  write(data) {this.emit('data', data);}
}
const stream = new CustomEmitter02();
