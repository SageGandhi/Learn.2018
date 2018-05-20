const passport = require('passport');
require('./strategies/local.strategy.js')();// Create A Local Strategy

module.exports = function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());
  // Serialization Save User Object To Session
  passport.serializeUser((user, done) => {
    done(null, user);// Error, User
  });
  // De-Serialization Retrieve User Object From Session
  passport.deserializeUser((user, done) => {
    done(null, user);// Error, User
  });
  // Install passport-local: npm install passport-local --save
};
