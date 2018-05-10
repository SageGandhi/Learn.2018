console.log("CallBack Example With Error & Success:Start");
var evenDoubler = (value,callBack)=>{
  var maxWaitTime = 1000,
      currentWaitTime = Math.floor(Math.random()*(maxWaitTime+1));
  if(value%2){
      setTimeout(()=>callBack(new Error("Odd Input Will Throw Error!!!")),currentWaitTime);
  }else{
      setTimeout(()=>callBack(null,value*2,currentWaitTime),currentWaitTime);
  }
};
module.exports.EvenDoubler = evenDoubler;
module.exports.AuthorName = "Prajit Gandhi";