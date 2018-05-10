var evenDoubler = require("./03.EvenDoubler").EvenDoubler,
    authorName = require("./03.EvenDoubler").AuthorName;

(function(noOfIteration){
    for(var loopIndex = 0;loopIndex < noOfIteration;loopIndex++){
        console.log("Calling evenDoubler For Value: " + loopIndex);
        evenDoubler(loopIndex,(error,result,waitTime)=>{
            if(error){
                console.log("Error Message: " + error.message);
            }else{
                console.log("The Results Are: " + result + " (" + waitTime + " ms)");
            }
            if(loopIndex==noOfIteration){//Concept Of Closure
                //To Resolve This We Need External Counter
                console.log('Done Executing....',loopIndex,noOfIteration);
            }
        });
    }
    console.log('Done Iterating......');
})(10);

console.log("Author Name:",authorName);