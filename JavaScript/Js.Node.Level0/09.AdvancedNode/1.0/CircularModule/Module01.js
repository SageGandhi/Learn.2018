exports.id = 'Module01.js';

exports.content = [1];

const module02 = require('./Module02');
console.log(module02);

exports.content.push(121);
exports.content.push(12321);
