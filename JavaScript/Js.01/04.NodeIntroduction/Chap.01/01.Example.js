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