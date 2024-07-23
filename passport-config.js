const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");
const { getDb } = require("./db"); // Assuming you have a db.js for MongoDB connection

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const db = getDb();
    try {
      const user = await db.collection("users").findOne({ email: email });
      if (user == null) {
        return done(null, false, { message: "No user with that email" });
      }

      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const db = getDb();
        try {
          let user = await db
            .collection("users")
            .findOne({ googleId: profile.id });

          if (!user) {
            user = await db.collection("users").insertOne({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            });
            return done(null, user.ops[0]); // Assuming insertOne returns an operation result
            //author Raees Khan
          }

          return done(null, user);
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user._id)); // Use _id for MongoDB documents

  passport.deserializeUser(async (id, done) => {
    const db = getDb();
    try {
      const user = await db.collection("users").findOne({ _id: id });
      done(null, user);
    } catch (e) {
      done(e, null);
    }
  });
}

module.exports = initialize;
