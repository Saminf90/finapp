const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "524005712636-18g6v8jbpjinj63crav5252b7r9nvavq.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser((user, done)=> {
    done(null, user)
})

passport.deserializeUser((user, done)=> {
    done(null, user)
})
