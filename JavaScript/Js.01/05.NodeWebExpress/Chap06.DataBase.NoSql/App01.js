const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('Application');

const app = express();
const port = process.env.Port || 3000;
const nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }];
const bookRouter = require('./src/routes/bookRouter')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

// MiddleWare Setup
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));// Serving Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/books', bookRouter);
app.use('/admin', adminRouter);
// Start Operation
app.get('/', (req, res) => res.render('index', { nav, title: 'Library' }));
// Listening To Port: node
app.listen(port, () => debug(`Server Started @ ${chalk.green(port)}`));
//$env:DEBUG = "*,-not_this"