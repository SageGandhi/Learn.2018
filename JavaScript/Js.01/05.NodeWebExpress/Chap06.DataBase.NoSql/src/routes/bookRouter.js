const express = require('express');
const sql = require('mssql');// Same Instance As In App01.js
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
    (async function query() {
      const sqlRequest = new sql.Request();

      const { recordset } = await sqlRequest.query('select * from books');// AsyncWait
      debug('All Book:', recordset);// If Success Return Database Books

      res.render('bookList', { nav: navigation, title: 'Library', books: recordset });
      if (!recordset) {
        res.render('bookList', { nav: navigation, title: 'Library', books });
      }
    }());// Iife
  });
  bookRouter.route('/:id').all((req, res, next) => {
    (async function query() {
      const { id } = req.params;// Object De-Structuring
      const sqlRequest = new sql.Request();
      const { recordset } = await sqlRequest
        .input('id', sql.Int, id)
        .query('select * from books where id = @id');// AsyncWait
      debug('Book:', recordset);
      [req.book] = recordset;// Array De-Structuring
    }());
    next();
  }).get((req, res) => {
    res.render('bookSingle', { nav: navigation, title: 'Library', book: req.book });
    if (!req.book) {
      res.render('bookSingle', { nav: navigation, title: 'Library', book: books[req.params.id] });
    }
  });
  return bookRouter;
}

module.exports = router;
