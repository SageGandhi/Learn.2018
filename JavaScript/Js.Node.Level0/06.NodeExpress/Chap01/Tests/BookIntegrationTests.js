const should = require('should');
const request = require('supertest');
const app = require('../App');
const mongoose = require('mongoose');

const Book = mongoose.model('Book');
const agent = request.agent(app);


describe('Book Crud Test', () => {
  it('Should Allow A Book Posted & Return Id/Read', (done) => {
    const bookPost = { title: 'Node Level0 Complete', author: 'Prajit Gandhi', genre: 'Development' };
    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        results.body.read.should.equal(false);
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Book.find({}, (error, books) => books.forEach(book => book.remove()));
    done();
  });
});
