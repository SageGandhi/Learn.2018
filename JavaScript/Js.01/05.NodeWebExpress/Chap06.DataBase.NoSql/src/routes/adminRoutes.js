const express = require('express');
const { MongoClient, Server } = require('mongodb');
const debug = require('debug')('AdminRoutes');
const adminRouter = express.Router();

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
    adminRouter.route('/onetimeInsert')
        .get((req, res) => {
            const url = 'mongodb://Mongo:MzfD7FPf4GOnttet@mongows-shard-00-00-1ae3q.mongodb.net:27017/libraryApp?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true';
            const dbName = 'libraryApp';
            (async function insertMany() {
                let client = await MongoClient.connect(url);
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
