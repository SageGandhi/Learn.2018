exports.id = 'Module02.js';

exports.content = [2];
exports.content.push(232);
exports.content.push(23432);

const module01 = require('./Module01');
console.log('Module01 Is Not Loaded Yet', module01);//Loaded:False For Module02
