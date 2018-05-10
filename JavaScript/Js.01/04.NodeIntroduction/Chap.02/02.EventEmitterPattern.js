var util = require("util"),
    EventEmitter = require("events").EventEmitter;
//Publisher Constructor
function EventEmitterExtendedConstructor(maxIterationCount){
    var maxIterationCountLocal = maxIterationCount,
    //To Access The EventEmitter Related Method From Current Context,Keep this In Closure
        selfAsEventEmitter = this;
    process.nextTick(()=>{
        var startCountIndex = 0;
            selfAsEventEmitter.emit('Start',startCountIndex);//Emitting Start Event
        var clearIntervalId = setInterval(()=>{
            startCountIndex++;
            selfAsEventEmitter.emit('Data',startCountIndex*startCountIndex,startCountIndex);//Emitting Data Event
            if(maxIterationCountLocal === startCountIndex ){
                selfAsEventEmitter.emit('End',startCountIndex);//Emitting End Event
                clearInterval(clearIntervalId);
            }
        },10);
    });
}
//Used In 03.EventEmitterUsage.js
util.inherits(EventEmitterExtendedConstructor,EventEmitter);//Constructor,SuperConstructor,Now EventEmitterExtendedConstructor Is Child Of EventEmitter Class.
module.exports = EventEmitterExtendedConstructor;//Exporting For This Module