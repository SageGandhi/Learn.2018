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
fileSystem.mkdir('Prajit',(error)=>{
    fileSystem.exists('Prajit',(exists)=>{
        if(exists){
            process.chdir('Prajit');
            fileSystem.writeFile('TempFirst.txt','Writing To File Using Node',(error)=>{
                fileSystem.rename('TempFirst.txt','Temp.txt',(error)=>{
                    fileSystem.stat('Temp.txt',(error,stats)=>{
                        console.log(`File Has Size:${stats.size} Bytes.`);
                        fileSystem.readFile('Temp.txt',(error,data)=>{
                            console.log(`File Has Content:${data.toString()}.`);                                        
                        });
                    });
                });
            });
        }
    });
});
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
