const LocalStrategy = require("passport-local").Strategy;
const RegisterModel = require("../Models/register.model");
exports.initializingPassport = (passport) => {
  passport.use(
    new LocalStrategy(async (email, password, done) => {
      try {
        const user = await RegisterModel.findOne({ email });
        if (!user) return done(null, false);
        if (user.password !== password) return done(null, false);
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await RegisterModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  })
};
