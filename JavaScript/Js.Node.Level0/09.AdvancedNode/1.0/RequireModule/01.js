console.log("In E:/Learn.2018/JavaScript/Js.Node.Level0/09.AdvancedNode/1.0/RequireModule/01.js");
console.log(`01.js Module:`,module);// Path Is Where Node Will Search For This Module
require.resolve('find-me-module');//As It Is Not Defined Cannot find module 'find-me-module',Resolve Step,Create mkdir node_modules/find-me-module
require('find-me-module');//Require ->Resolving->Loading->Wrapping->Evaluating,children: [ [Circular] ]:find-me-module
