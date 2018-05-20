//Do npm install https
var http = require("https");//If we Use Http Module,Https Protocol Is Not Supported
console.log("Going To Make Request...");

var requestGoogle_02 = http.request({
    host:'www.google.com',
    port:443,
    path:'/',
    method:'GET'
},(response)=>{
   console.log(`Status Code:${response.statusCode}`);
   response.pipe(process.stdout);
   console.log('----------------------------------');
});
requestGoogle_02.end();
