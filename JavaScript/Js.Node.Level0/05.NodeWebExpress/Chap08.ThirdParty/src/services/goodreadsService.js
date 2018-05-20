const axios = require('axios');
const xml2js = require('xml2js');
const debug = require('debug')('GoodreadsService');

const parser = xml2js.Parser({ explicitArray: false });

function goodreadsService() {
  function getBookByIsbn(isbn) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.goodreads.com/book/isbn/${isbn}?key=1YFQZU1Vb8bvIog0mAWu5Q`)
        .then((response) => {
          parser.parseString(response.data, (err, result) => {
            if (err) {
              debug(err);
            } else {
              debug(result);
              resolve(result.GoodreadsResponse.book);
            }
          });
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }
  return { getBookByIsbn };
}

module.exports = goodreadsService();
