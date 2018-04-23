console.log('The Journey Begins..Prince Of Persia:',process.version);
var args = process&&process.argv;//Argument Passed To Node Process
console.log('Arguments Passed:',args);//Global Variable
//object,string,number,boolean,function
console.log('Arguments,Version Type:',typeof args,typeof process.version,typeof console.log);
//Simple Function:Immediately Invoked Function Expression
(function(message){//Local Variable
    console.log('Hello World!!',message,Math.random());
}('Prajit Gandhi'));
//Create A Die Roll Function:Practice
if(args.length==4 && typeof args==='object'){//If Statement
    console.log('Provided 2 Argument');
}
for(var index=0;index<1;index++){//For Loop/While/Do-While Practice
    console.log('Square:',index*index,',Qube:',index*index*index);
}
//Object:Oop Concept
var toolsUsed={
    tools:['Visual Studio Code'],
    get:function(){return this.tools;}
};
var http=require('http');//Require Other Modules
http.createServer(function(request,response){
    console.log('Writing To Response.....')
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Prajit Started Node Http Server Port@9999....');
}).listen(9999);