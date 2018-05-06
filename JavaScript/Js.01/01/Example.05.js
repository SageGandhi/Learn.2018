var Book = require("./Example.03").GradeBook;
var Express = require("express");/***npm install express To Use ExpressJs*/
var App = Express();
App.get("/", function (req, res) {
    res.send("Welcome To My GradeBook Rest Services!");
});

App.get("/grade", function (req, res) {
    var grades = req.query.grades.split(",");
    for (var index = 0; index < grades.length; index += 1) {
        Book.addGrade(parseInt(grades[index]));
    }
    res.send("Your Average Is: " + Book.getAverage() + " Grade: " + Book.getLetterGrade());
});

App.listen(3000);/***  Command:node .\Example.05.js In PowerShell*/
console.log("Server ready...");