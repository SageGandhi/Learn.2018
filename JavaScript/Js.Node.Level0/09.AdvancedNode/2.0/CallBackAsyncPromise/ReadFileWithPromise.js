const fileSystem = require('fs');
const readsFileAsArray = function (file) {
    return new Promise((resolve, reject) => {
        fileSystem.readFile(file, function (err, data) {
            if (err) return reject(err);
            const lines = data.toString().trim().split('\n');
            resolve(lines);
        });
    });
}
readsFileAsArray('./ReadFileWithCallbackData')
    .then(lines => {
        const nums = lines.map(Number);
        console.log(`Numbers:${nums}`);
    }).catch(console.log);