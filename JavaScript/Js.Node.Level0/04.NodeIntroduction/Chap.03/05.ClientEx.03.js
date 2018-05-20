//Do npm install https
var http = require("https");//If we Use Http Module,Https Protocol Is Not Supported
console.log("Going To Make Request...");

http.get('https://www.google.com/',(response)=>{
    console.log(response.statusCode);
    response.pipe(process.stdout);
    console.log('----------------------------------');
});
