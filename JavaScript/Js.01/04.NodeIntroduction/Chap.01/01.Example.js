//Event Loop Understanding
var count = 0;
var timeOut = setInterval(()=>{
    count++;
    console.log("Interval Of 10 ms, Count = " + count);
    if(count===15){
        clearInterval(timeOut);//Clear Interval Setup
    }
},10);
setTimeout(()=>{
    console.log("Timeout At 200 ms");
},200);
console.log("Running!");

//Running A Server:process.env.PORT/process.env.IP Are For Cloud9
var http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("WelCome To Node Js Application");
}).listen(process.env.PORT,process.env.IP);

console.log("Server Up & Running!");