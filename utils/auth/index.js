const passport = require('passport');

const localStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
/* const twtStrategy = require('./strategies/twt.strategy')
const fbStrategy = require('./strategies/fb.strategy') */

passport.use(localStrategy);
passport.use(JwtStrategy);
