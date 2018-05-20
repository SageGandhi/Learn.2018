const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('AuthRoutes');
const passport = require('passport');

const authRouter = express.Router();

function router(navigation) {
  // For Post Use Body-Parser:npm install body-parser --save
  // app.use(bodyParser.json());app.use(bodyParser.urlencoded({ extended: false })); In App.js
  // npm install passport cookie-parser express-session --save
  authRouter.route('/signUp')
    .post((req, res) => {
      debug(req.body);
      // Create User
      const { username, password } = req.body;
      const url = 'mongodb://Mongo:mUW8fg8YDN3wgoQA@mongows-shard-00-00-1ae3q.mongodb.net:27017/libraryApp?ssl=true&replicaSet=MongoWs-shard-0&authSource=admin&retryWrites=true';
      const dbName = 'libraryApp';
      (async function addUser() {
        const client = await MongoClient.connect(url);
        debug('Connected Correctly To Server');
        const db = client.db(dbName);
        const col = db.collection('users');
        const user = { username, password };
        const results = await col.insertOne(user);
        debug(results);// req.login Or logout
        req.login(results.ops[0], () => {
          res.redirect('/auth/profile');
        });
      }());
      // LogIn User:req.login(req.body, () => res.redirect('/auth/profile'));
    });
  authRouter.route('/profile')
    .all((req, res, next) => {
      // Protecting /profile:Passport Will Place req.user If User Signed In Correctly
      if (req.user) {
        next(); // Middleware Will Forward Request To Actual Get Handler
      } else {
        res.redirect('/');
      }
    })
    .get((req, res) => {
      debug(req.user);
      res.json(req.user);
    });
  authRouter.route('/signin')
    .get((req, res) => {
      debug(req.user);
      res.render('signin', {
        nav: navigation,
        title: 'Sign In'
      });
    }).post(passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/'
    }));
  return authRouter;
}

module.exports = router;
