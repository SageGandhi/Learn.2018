const express = require('express');
const sql = require('mssql');
const debug = require('debug')('Application:BookRouter');
// Wrap Inside A Function To Pass Config Fo Navigation Object
const bookRouter = express.Router();
function router(navigation) {
  const books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Les Misérables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
    },
    {
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false
    },
    {
      title: 'The Dark World',
      genre: 'Fantasy',
      author: 'Henry Kuttner',
      read: false
    },
    {
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }];
  bookRouter.route('/').get((req, res) => {
    const sqlRequest = new sql.Request();
    sqlRequest.query('select * from books')// Promise
      .then((result) => {
        debug(result);// If Success Return Database Books
        res.render('bookList', { nav: navigation, title: 'Library', books: result.recordset });
      }).catch((err) => {
        debug(err);// If Error Return HardCoded Books
        res.render('bookList', { nav: navigation, title: 'Library', books });
      });
  });
  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;// Object DeStructuring
    res.render('bookSingle', { nav: navigation, title: 'Library', book: books[id] });
  });
  return bookRouter;
}

module.exports = router;
