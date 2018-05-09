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

//CallBack Example
console.log("CallBack Example With Error & Success:Start");
var evenDoubler = (value,callBack)=>{
  var maxWaitTime = 1000,
      currentWaitTime = Math.floor(Math.random()*(maxWaitTime+1));
  if(value%2){
      setTimeout(()=>callBack(new Error("Odd Input Will Throw Error!!!")),currentWaitTime);
  }else{
      setTimeout(()=>callBack(null,value*2,currentWaitTime),currentWaitTime);
  }
};
(function(noOfIteration){
    for(var loopIndex = 0;loopIndex < noOfIteration;loopIndex++){
        console.log("Calling evenDoubler For Value: " + loopIndex);
        evenDoubler(loopIndex,(error,result,waitTime)=>{
            if(error){
                console.log("Error Message: " + error.message);
            }else{
                console.log("The Results Are: " + result + " (" + waitTime + " ms)");
            }
        });
    }
    console.log('Done Iterating......');
})(10);
