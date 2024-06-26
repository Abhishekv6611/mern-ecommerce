const UserData = require('../Schemas/UserSchema');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'RandomString';

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await UserData.findOne({ id: jwt_payload.sub });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
}));

module.exports = passport;
