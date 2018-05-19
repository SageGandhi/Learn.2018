const express = require('express');
const bookController = require('../controllers/bookController');
const bookService = require('../services/goodreadsService');

// Wrap Inside A Function To Pass Config Fo Navigation Object
const bookRouter = express.Router();
function router(navigation) {
  const { getIndex, getById, middleware } = bookController(bookService, navigation);
  bookRouter.use(middleware);
  bookRouter.route('/').get(getIndex);
  bookRouter.route('/:id').get(getById);
  return bookRouter;
}

module.exports = router;
