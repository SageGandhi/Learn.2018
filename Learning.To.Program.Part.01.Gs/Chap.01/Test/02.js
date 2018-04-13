var Grade = require('../02').Grade;
exports['setUp']=function(callBack){//Reset Before Each Test
    Grade.resetAllGrades();
    callBack();
}
//Run nodeunit With Test Directory As Argument
exports["Can Add New Grade"]=function(testInstance){
    Grade.addGrade(90);
    testInstance.equal(Grade.getCount(),1);
    testInstance.done();
};
//Add Test For Avg Grade:Practice
//Add Test For Different AVg Grade:A[95]/B[85]/C[75]/D[65]/E[50]