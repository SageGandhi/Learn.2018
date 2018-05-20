var ExtEventEmitter = require("./02.EventEmitterPattern"),
    MyEventEmitterInstance = new ExtEventEmitter(10);

//Start Subscriber[Start Event]
MyEventEmitterInstance.on('Start',(startIndex)=>{
    console.log('Iteration Started',startIndex);
});
//Data Subscriber[Data Event]
MyEventEmitterInstance.on('Data',(dataResult,iterationIndex)=>{
    console.log('Iteration:',iterationIndex,',Data:',dataResult);
});
//End Subscriber[End Event]
MyEventEmitterInstance.on('End',(endIndex)=>{
    console.log('Ended Iteration:',endIndex);
});
