//(function (exports, require, module, __filename, __dirname) { console.fog('Error In First Line Will Display Wrapper Function Signature');
if (false) { console.fog('Error In First Line Will Display Wrapper Function Signature'); }
console.log('All Args Before Change:', arguments);
console.log('------------------------------------------------');
exports = { "Name": "Prajit Gandhi" };//Replace The Exports Object
console.log('All Args Replace Change:', arguments);
console.log('------------------------------------------------');
var exports = module.exports;
exports.Name = "Prajit Gandhi";//Will Not Replace The Exports Object,Add Extra Property
module.exports = { "Name": "Prajit Gandhi" };//Will Not Replace The Exports Object,Add Extra Property,Using Direct Module Reference
console.log('All Args:', arguments);//Check '0'th Arg: { Name: 'Prajit Gandhi' } & '2'nd Arg:Module.exports: { Name: 'Prajit Gandhi' } Is Same Or Not
console.log('------------------------------------------------');
console.log(require('module').wrapper);//Wrapping Function Returns This Export Reference.
require = function(){return { Name: "Prajit Gandhi" };}//Override For Mocking
console.log(require('fs'),require('any-other'));//{ Name: "Prajit Gandhi" }
console.log('------------------------------------------------');