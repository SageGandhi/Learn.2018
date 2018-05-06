var Book = require("./Example.03").GradeBook;
if (process && process.argv) {
    for (var index = 2; index < process.argv.length; index += 1) {
        Book.addGrade(parseInt(process.argv[index]));
    }
}
console.log(Book.getAverage());