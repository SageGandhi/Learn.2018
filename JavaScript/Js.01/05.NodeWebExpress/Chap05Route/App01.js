// Keep All Require At The Top
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('Application');
// Keep All Variable After Require
const app = express();
const port = process.env.Port || 3000;
const nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }];
//const bookRouter = require('./src/routes/bookRouter');
const bookRouter = require('./src/routes/bookRouter')(nav);//Created Wrapped Function
//const bookRouter = express.Router();//Create Router
//Initial Version:For Books
//const books = [{ "title": "War and Peace", "genre": "Historical Fiction", "author": "Lev Nikolayevich Tolstoy", "read": false }, { "title": "Les Misérables", "genre": "Historical Fiction", "author": "Victor Hugo", "read": false }, { "title": "The Time Machine", "genre": "Science Fiction", "author": "H. G. Wells", "read": false }, { "title": "A Journey into the Center of the Earth", "genre": "Science Fiction", "author": "Jules Verne", "read": false }, { "title": "The Dark World", "genre": "Fantasy", "author": "Henry Kuttner", "read": false }, { "title": "The Wind in the Willows", "genre": "Fantasy", "author": "Kenneth Grahame", "read": false }, { "title": "Life On The Mississippi", "genre": "History", "author": "Mark Twain", "read": false }, { "title": "Childhood", "genre": "Biography", "author": "Lev Nikolayevich Tolstoy", "read": false }];
// MiddleWare Setup
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));// Serving Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
//bookRouter.route('/books').get((req,res)=>res.send("Books Will Be Listed Here"));//Initial
//bookRouter.route('/books').get((req, res) => res.render('books', { nav, title: 'Library' }));//Second Version
//bookRouter.route('/books').get((req, res) => res.render('bookList', { nav, title: 'Library', books }));//Third Version
app.use('/books', bookRouter);//Using Router,Similar To Use /books Here & / In bookRouter.route('/')
// Start Operation
app.get('/', (req, res) => res.render('index', { nav, title: 'Library' }));
// Listening To Port: node
app.listen(port, () => debug(`Server Started @ ${chalk.green(port)}`));
