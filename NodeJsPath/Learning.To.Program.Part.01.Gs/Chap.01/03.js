var AppExpress=require('express');
var App=AppExpress();
App.listen(9999);
App.get('/',function(request,response){
    console.log('Writing To Response.....')
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Prajit Started Node Http Server Port@9999....');
});
App.get('/getName',function(request,response){
    console.log('Writing To Response.....')
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Query Param:'+request.query.name);
});
//Add Another URI Using Express:Practice
console.log('Server Running @9999');