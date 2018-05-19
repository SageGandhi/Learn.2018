const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const debug = require('debug')('Application');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.Port || 3000;
const nav = [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }];
const bookRouter = require('./src/routes/bookRouter')(nav);
const adminRouter = require('./src/routes/adminRoutes')();
const authRouter = require('./src/routes/authRoutes')(nav);

// MiddleWare Setup
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));// Post Body Extraction
// Passport:Start
app.use(cookieParser());
app.use(session({ secret: 'library' }));// Secret Provided As library
require('./src/config/passport.js')(app);
// Passport:End
app.use(express.static(path.join(__dirname, 'public')));// Serving Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
// Start Operation
app.get('/', (req, res) => res.render('index', { nav, title: 'Library' }));
// Listening To Port: node
app.listen(port, () => debug(`Server Started @ ${chalk.green(port)}`));
// $env:DEBUG = "*,-not_this"
