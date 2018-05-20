const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// `mongodb+srv://Mongo:xxxxxxxx@mongows-1ae3q.mongodb.net/BookApi${process.env.ENV == "Test" ? "Test" : ""}?retryWrites=true`
//`mongodb://Mongo:xxxxxxxx@mongows-shard-00-00-1ae3q.mongodb.net:27017/BookApi${process.env.ENV == "Test" ? "Test" : ""}?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true`
const url = `mongodb+srv://Mongo:xxxxxxxx@mongows-1ae3q.mongodb.net/BookApi${process.env.ENV == "Test" ? "Test" : ""}?retryWrites=false`;
const dataBase = mongoose.connect(url);
dataBase.then(() => {
    console.log(dataBase);
})
    .catch(err => { // we will not be here...
        console.error('App Starting Error:', err.stack);
        process.exit(1);
    });

const Book = require('./models/BookModelMongoose');
require('./Books')(Book);
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const bookRoutes = require('./Routes/BookRoutes')(Book, dataBase);

app.use('/api/books', bookRoutes);
app.get('/', (req, res) => Book.find({}, (err, books) => res.json(books)));
app.listen(port, () => console.log(`Gulp Is Running My App @:${port}`));

module.exports = app;
