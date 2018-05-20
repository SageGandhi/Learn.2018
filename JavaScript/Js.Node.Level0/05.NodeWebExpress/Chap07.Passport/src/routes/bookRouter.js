const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('BookRotes');

// Wrap Inside A Function To Pass Config Fo Navigation Object
const bookRouter = express.Router();
function router(navigation) {
  bookRouter.use((req, res, next) => {
    // Protecting All Resources Served By This Router:
    // Passport Will Place req.user If User Signed In Correctly
    if (req.user) {
      next(); // Middleware Will Forward Request To Actual Get Handler
    } else {
      res.redirect('/');
    }
  });
  const books = [
    {
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false
    }];
  const url = 'mongodb://Mongo:mUW8fg8YDN3wgo@mongows-shard-00-00-1ae3q.mongodb.net:27017/libraryApp?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true';
  const dbName = 'libraryApp';
  bookRouter.route('/').get((req, res) => {
    (async function mongo() {
      const client = await MongoClient.connect(url, { useNewUrlParser: true });
      try {
        debug('Connected Correctly To Server');
        const db = client.db(dbName);
        const collection = await db.collection('books');
        const booksDb = await collection.find().toArray();
        res.render('bookList', { nav: navigation, title: 'Library', books: booksDb });
      } catch (error) {
        res.render('bookList', { nav: navigation, title: 'Library', books });
      }
      client.close();
    }());
  });
  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;// Object DeStructuring
    (async function mongo() {
      const client = await MongoClient.connect(url, { useNewUrlParser: true });
      try {
        debug('Connected Correctly To Server');
        const db = client.db(dbName);
        const collection = await db.collection('books');
        // Requires ObjectID
        const booksDb = await collection.findOne({ _id: new ObjectID(id) });
        debug(`From Db:${booksDb}`);
        res.render('bookSingle', { nav: navigation, title: 'Library', book: booksDb });
      } catch (error) {
        res.render('bookSingle', { nav: navigation, title: 'Library', book: books[0] });
      }
      client.close();
    }());
  });
  return bookRouter;
}

module.exports = router;
