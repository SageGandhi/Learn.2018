const mongoose = require('mongoose');

console.log('Ready:', mongoose.connection.readyState);

const { Schema } = mongoose;

const BookModel = new Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false },
}, { collection: 'Books' });
// https://stackoverflow.com/questions/18628656/model-find-returns-empty-in-mongoose
module.exports = mongoose.model('Book', BookModel);
