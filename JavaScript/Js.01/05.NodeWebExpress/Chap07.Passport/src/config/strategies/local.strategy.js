const passport = require('passport');
const { Strategy } = require('passport-local');
const debug = require('debug')('LocalStrategy');
const { MongoClient } = require('mongodb');

function localStrategy() {
  passport.use(new Strategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    const url = 'mongodb://Mongo:mUW8fg8YDN3wgoQA@mongows-shard-00-00-1ae3q.mongodb.net:27017/libraryApp?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true';
    const dbName = 'libraryApp';
    (async function mongo() {
      const client = await MongoClient.connect(url);
      debug('Connected Correctly To Server');
      const db = client.db(dbName);
      const col = db.collection('users');
      const user = await col.findOne({ username });
      if (user.password === password) {
        done(null, user);
      } else {
        done(null, false);
      }
      client.close();
    }());
  }));
}

module.exports = localStrategy;
