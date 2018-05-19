const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('BookController');

function bookController(bookService, navigation) {
  const url = 'mongodb://Mongo:mUW8fg8YDN3wgoQA@mongows-shard-00-00-1ae3q.mongodb.net:27017/libraryApp?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true';
  const dbName = 'libraryApp';
  function getIndex(req, res) {
    (async function mongo() {
      const client = await MongoClient.connect(url, { useNewUrlParser: true });
      debug('Connected Correctly To Server');
      const db = client.db(dbName);
      const collection = await db.collection('books');
      const booksDb = await collection.find().toArray();
      res.render('bookList', { nav: navigation, title: 'Library', books: booksDb });
      client.close();
    }());
  }
  function getById(req, res) {
    const { id } = req.params;// Object DeStructuring
    (async function mongo() {
      const client = await MongoClient.connect(url, { useNewUrlParser: true });
      debug('Connected Correctly To Server');
      const db = client.db(dbName);
      const collection = await db.collection('books');
      // Requires ObjectID
      const booksDb = await collection.findOne({ _id: new ObjectID(id) });
      debug(`From Db:${booksDb}`);
      booksDb.details = await bookService.getBookByIsbn(booksDb.isbn);
      res.render('bookSingle', { nav: navigation, title: 'Library', book: booksDb });
      client.close();
    }());
  }
  function middleware(req, res, next) {
    next();// DeActivating Passport Authentication
  }
  return {
    // Revealing Module Pattern
    getIndex,
    getById,
    middleware
  };
}

module.exports = bookController;
