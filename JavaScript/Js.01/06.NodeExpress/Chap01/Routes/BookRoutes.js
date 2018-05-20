const express = require('express');

const routes = function routes(Book, db) {
  const bookRouter = express.Router();
  const bookControllerInst = require('../Controllers/BookController')(Book, db);
  bookRouter.route('/')
    .post(bookControllerInst.post)
    .get(bookControllerInst.get);

  bookRouter.use('/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err){
        res.status(500).send(err);
      }else if (book) {
        req.book = book;
        next();
      }else {
        res.status(404).send('No Book Found');
      }
    });
  });
  bookRouter.route('/:bookId')
    .get(function (req, res) {
      var returnBook = req.book.toJSON();
      returnBook.links = {};
      var newLink = `http://${req.headers.host}/api/books/?genre=${returnBook.genre}`;
      returnBook.links.FilterByThisGenre = newLink.replace(' ', '%20');
      res.json(returnBook);

    })
    .put(function (req, res) {
      req.book.title = req.body.title;
      req.book.author = req.body.author;
      req.book.genre = req.body.genre;
      req.book.read = req.body.read;
      req.book.save(function (err) {
        if (err){
          res.status(500).send(err);
        }else {
          res.json(req.book);
        }
      });
    })
    .patch(function (req, res) {
      if (req.body._id){
        delete req.body._id;
      }
      for (var p in req.body) {
        req.book[p] = req.body[p];
      }
      req.book.save(function (err) {
        if (err){
          res.status(500).send(err);
        }else {
          res.json(req.book);
        }
      });
    })
    .delete(function (req, res) {
      req.book.remove(function (err) {
        if (err)
          res.status(500).send(err);
        else {
          res.status(204).send('Removed');
        }
      });
    });
  return bookRouter;
};

module.exports = routes;
