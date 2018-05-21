const should = require('should');
const sinon = require('sinon');
const bookController = require('../Controllers/BookController');

describe('Book Controller Tests:', () => {
  describe('Post', () => {
    it('Should ! Allow An Empty Title On Post', () => {
      const Book = function Book(book) {
        this.save = () => { };
      };
      const req = { body: { author: 'Prajit Gandhi' } };
      const res = { status: sinon.spy(), send: sinon.spy() };

      const bookControllerInst = bookController(Book);
      bookControllerInst.post(req, res);
      // 1st Index Invocation #,2nd Index Parameter Index
      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Title Is Required').should.equal(true);
    });
  });
});
