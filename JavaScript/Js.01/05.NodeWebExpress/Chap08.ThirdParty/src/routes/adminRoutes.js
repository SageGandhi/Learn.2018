const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('AdminRoutes');

const adminRouter = express.Router();

function router() {
  const books = [
    {
      title: 'How to Be a Bawse: A Guide to Conquering Life',
      author: 'Lilly Singh',
      isbn: '0718186915'
    },
    {
      title: 'Magnus Chase and the Ship of the Dead',
      author: 'Rick Riordan',
      isbn: '0141342595'
    },
    {
      title: 'A Song of Ice and Fire',
      author: 'George R. R. Martin',
      isbn: '0007548303'
    }
  ];
  adminRouter.route('/onetimeInsert')
    .get((req, res) => {
      const url = 'mongodb://Mongo:mUW8fg8YDN3wgoQA@mongows-shard-00-00-1ae3q.mongodb.net:27017/libraryApp?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true';
      const dbName = 'libraryApp';
      (async function insertMany() {
        const client = await MongoClient.connect(url);
        debug('Connected Correctly To Server');
        const db = client.db(dbName);
        const response = await db.collection('books').insertMany(books);
        res.json(response);
        client.close();
      }());
    });
  return adminRouter;
}

module.exports = router;
