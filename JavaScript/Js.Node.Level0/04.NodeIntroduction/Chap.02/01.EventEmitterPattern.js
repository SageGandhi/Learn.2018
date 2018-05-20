//EventEmitter Example:Pattern:01
var EventEmitter = require("events").EventEmitter,
    //Publisher
    getResource =  function(iterationIndex){
        var eventEmitter = new EventEmitter();
        //On The Very Next Tick Of The Event Loop This Function Will Be Called
        process.nextTick(()=>{
            var startCountIndex = 0;
            eventEmitter.emit('Start',startCountIndex);//Emitting Start Event
            var clearIntervalId = setInterval(()=>{
                startCountIndex++;
                eventEmitter.emit('Data',startCountIndex*startCountIndex,startCountIndex);//Emitting Data Event
                if(iterationIndex === startCountIndex ){
                    eventEmitter.emit('End',startCountIndex);//Emitting End Event
                    clearInterval(clearIntervalId);
                }
            },10);
        });
        return eventEmitter;
    },
    resource = getResource(5);
    
//Start Subscriber[Start Event]
resource.on('Start',(startIndex)=>{
    console.log('Iteration Started',startIndex);
});
//Data Subscriber[Data Event]
resource.on('Data',(dataResult,iterationIndex)=>{
    console.log('Iteration:',iterationIndex,',Data:',dataResult);
});
//End Subscriber[End Event]
resource.on('End',(endIndex)=>{
    console.log('Ended Iteration:',endIndex);
});