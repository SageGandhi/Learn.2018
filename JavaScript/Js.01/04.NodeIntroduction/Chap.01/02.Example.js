var os = require("os"),
    toMb = (value)=>Math.round((((value/1024)/1024)*100)/100);

console.log("Host Name:",os.hostname());
console.log("15 Min Load Avg:",os.loadavg());
console.log("Free Memory/TotalMemory:",toMb(os.freemem()),"/",toMb(os.totalmem()));