/*** Run Command:nodeunit .\Example.04.Test.js */
var Book = require("./Example.03").GradeBook;

exports["setUp"] = function (callback) {
    Book.reset();
    callback();//To Let NodeUnit Know Setup Is Completed For Each Test Case
};

exports["Can Average Grades"] = function (test) {
    Book.addGrade(100);
    Book.addGrade(50);

    test.equal(Book.getAverage(), 75);
    test.done();//To Let NodeUnit Know Test Is Completed
};

exports["Can Add New Grade"] = function (test) {
    Book.addGrade(90);
    
    test.equal(Book.getCountOfGrades(), 1);
    test.done();//To Let NodeUnit Know Test Is Completed
};

exports["Can Compute LetterGrade Of First"] = function(test){
    Book.addGrade(100);
    Book.addGrade(90);
	
    test.equal(Book.getLetterGrade(), 'First');
    test.done();
};