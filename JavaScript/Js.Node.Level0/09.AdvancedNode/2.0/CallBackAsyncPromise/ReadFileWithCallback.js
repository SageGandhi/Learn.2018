const fileSystem = require('fs');
const readsFileAsArray = function(file,callback){
    fileSystem.readFile(file,function(err,data){
        if(err) return callback(err);
        const lines = data.toString().trim().split('\n');
        callback(null,lines);
    });
}
readsFileAsArray('./ReadFileWithCallbackData',(error,lines)=>{
    if(error) console.log(error);
    const nums = lines.map(Number);
    console.log(`Numbers:${nums}`);
});