// Keep All Require At The Top
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('Application');
const sql = require('mssql');
// Keep All Variable After Require
const app = express();
const port = process.env.Port || 3000;
const nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }];
const config = { "user": "****ChangeIt****", "password": "****ChangeIt****", "server": "****ChangeIt****", "database": "****ChangeIt****", "options": { "encrypt": true } };
const bookRouter = require('./src/routes/bookRouter')(nav);//Created Wrapped Function
// MiddleWare Setup
sql.connect(config).catch(err => debug(err));//Connect With SqlServer
app.use(morgan('tiny'));
app.use((req, res, next) => {//Check Usage In BooksRouter
    debug('Middleware Intercepted'); next();
});
app.use(express.static(path.join(__dirname, 'public')));// Serving Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/books', bookRouter);
// Start Operation
app.get('/', (req, res) => res.render('index', { nav, title: 'Library' }));
// Listening To Port: node
app.listen(port, () => debug(`Server Started @ ${chalk.green(port)}`));
