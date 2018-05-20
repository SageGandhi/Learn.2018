var GradeBook = {
    _grades: [],
    addGrade: function (newGrade) {
        this._grades.push(newGrade);
    },
    getCountOfGrades: function () {
        return this._grades.length;
    },
    getAverage: function () {
        if (this.getCountOfGrades() != 0) {
            return this._grades.reduce((accumulator, value) => accumulator + value) / this.getCountOfGrades();
        } else {
            return 0;
        }
    },
    getLetterGrade: function () {
        if (this.getAverage() >= 90) {
            return "First";
        }
        else if (this.getAverage() >= 80) {
            return "Second";
        }
        else if (this.getAverage() >= 70) {
            return "Third";
        }
        else if (this.getAverage() >= 60) {
            return "Fourth";
        }else{
            return "Fifth";
        }        
    },
    reset: function () {
        this._grades = [];
    }
};
exports.GradeBook = GradeBook;
/***Export Developer Name */
exports.DeveloperName = "Prajit Gandhi";