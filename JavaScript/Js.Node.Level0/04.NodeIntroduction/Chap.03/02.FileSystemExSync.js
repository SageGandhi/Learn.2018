//Create Prajit Diirectory Under This Project Directory JavaScript/Js.01/04.NodeIntroduction/Chap.03/ mkdir Prajit
//Setup/Initialize
var fileSystem = require("fs");
if(fileSystem.existsSync('Prajit')){
    console.log('Directory Exists, Removing...');
    //Create Prajit/Temp.txt File Under This Project Directory JavaScript/Js.01/04.NodeIntroduction/Chap.03 : echo "">Prajit/Temp.txt   
    if(fileSystem.existsSync('Prajit/Temp.txt')){
        fileSystem.unlinkSync('Prajit/Temp.txt');
    }
    fileSystem.rmdirSync('Prajit');
}
//Excercise
fileSystem.mkdirSync('Prajit');
if(fileSystem.existsSync('Prajit')){
    process.chdir('Prajit');
    fileSystem.writeFileSync('TempFirst.txt','Writing To File Using Node');
    fileSystem.renameSync('TempFirst.txt','Temp.txt');
    console.log(`File Has Size:${fileSystem.statSync('Temp.txt').size} Bytes.`);
    console.log(`File Has Content:${fileSystem.readFileSync('Temp.txt').toString()}.`);
}
//CleanUp
process.chdir('..');
if(fileSystem.existsSync('Prajit')){
    console.log('Directory Exists, Removing...');
    //Create Prajit/Temp.txt File Under This Project Directory JavaScript/Js.01/04.NodeIntroduction/Chap.03 : echo "">Prajit/Temp.txt   
    if(fileSystem.existsSync('Prajit/Temp.txt')){
        fileSystem.unlinkSync('Prajit/Temp.txt');
    }
    fileSystem.rmdirSync('Prajit');
}
