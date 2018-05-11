var evenDoubler = require('../Chap.01/03.EvenDoubler');
process.on('message',(data)=>{
   if(data.Command==='Double'){
       console.log(`ChildProcess:${data.Value} Asked For Double The Value.`);
       //Send Request To Parent Process
       process.send({Value:evenDoubler.EvenDoublerSync(data.Value),Message:'Success'});
   }else if(data.Command==='Done'){
       console.log('Exiting Child Process')
       process.exit();
   }
});