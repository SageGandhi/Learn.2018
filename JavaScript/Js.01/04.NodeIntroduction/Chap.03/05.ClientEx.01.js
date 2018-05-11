//Do npm install https
var http = require("https");//If we Use Http Module,Https Protocol Is Not Supported
console.log("Going To Make Request...");
var requestGoogle_01 = http.request('https://www.google.com/',(response)=>{
   console.log(`Status Code:${response.statusCode}`);
   response.pipe(process.stdout);
   console.log('----------------------------------');
});
requestGoogle_01.end();//To Send The Request
