var GradeBook = {
    _grades:[],
    addGrade:function(newGrade){
        this._grades.push(newGrade);
    },
    getCount:function(){
        return this._grades.length;
    },
    resetAllGrades:function(){
        this._grades=[];
    }
};
exports.Grade=GradeBook;