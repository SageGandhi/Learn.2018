//Keep All Require At The Top
var express = require('express');
var chalk = require('chalk');
var morgan = require('morgan');//npm install --save morgan
var path = require('path');
//Do npm install --save debug
var debug = require('debug')('Application');
//Keep All Variable After Require
var app = express();
//MiddleWare Setup
app.use(morgan('tiny'));//combined:Standard Apache Combined Log Output/tiny:Using A Predefined Format String
app.use(express.static(path.join(__dirname, 'public')));//Serving Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));//Use npm install bootstrap jquery --save
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
//Start Operation
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));//Using Path Instead Of res.send('Welcome To Node Express.');
});
//Listening To Port: node
app.listen(3000, function () {//String Templating
    debug(`Server Started @ ${chalk.green('http://localhost:3000/')}`);//Instead Of console.log
});
//Use DEBUG=* node .\App01.js Or For PowerShell Use $env:DEBUG = "*,-not_this" Then node .\App01.js