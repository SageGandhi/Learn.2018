const express = require('express');// Keep All Require At The Top
const chalk = require('chalk');
const morgan = require('morgan');// npm install --save morgan
const path = require('path');
// Do npm install --save debug
const debug = require('debug')('Application');
// Keep All Variable After Require
const app = express();
const port = process.env.Port || 3000;
// MiddleWare Setup
app.use(morgan('tiny'));// combined:Standard Apache Combined Log Output/tiny:Using A Predefined Format String
app.use(express.static(path.join(__dirname, 'public')));// Serving Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
// Use npm install bootstrap jquery --save
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');//Used For Views
app.set('view engine', 'pug');//View Engine Will Be Pug
// Start Operation
app.get('/', (req, res) => {
  // Used For Pug Based Render Will Be Found In ./src/views/index.pug
  res.render('index', {
    Label: "My Friend List",
    Friends: ["Prajit Gandhi", "Swagat Srichandan", "Debashis  Baskey", "Sraboni Ghorai"]
  });
});
// Listening To Port: node
app.listen(port, () => { // String Templating
  debug(`Server Started @ ${chalk.green(port)}`);// Instead Of console.log
});
// Use DEBUG=* node .\App01.js Or For PowerShell Use $env:DEBUG = "*,-not_this" Then node .\App01.js
