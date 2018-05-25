const fileSystem = require('fs');
//Default Value For Callback
const readsFileAsArray = function (file, callback = () => { }) {
    return new Promise((resolve, reject) => {
        fileSystem.readFile(file, function (err, data) {
            if (err) {
                reject(err);
                return callback(err);
            }
            const lines = data.toString().trim().split('\n');
            callback(null, lines);
            resolve(lines);
        });
    });
}

async function printNumbers(){
    try{
        const lines = await readsFileAsArray('./ReadFileWithCallbackData');
        const nums = lines.map(Number);
        console.log(`Numbers:${nums}`);
    }catch(error){
        console.log(error);
    }
}
printNumbers();