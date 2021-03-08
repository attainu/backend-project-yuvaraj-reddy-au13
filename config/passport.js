const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const User = require('../models/User');


module.exports = function(passport){
    passport.use(new GoogleStrategy({
      clientID: '360714344961-vqika60uppe7hc0mbdhnq61h648r7eph.apps.googleusercontent.com',
      clientSecret: 'zT0tpv0sX8x-4xyC3qeXuyu3',
      callbackURL: "http://localhost:5025/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done)=>{
        console.log(profile)
        const newUser = {
          googleId : profile.id,
          displayName : profile.displayName,
          firstname : profile.name.givenName,
          lastname : profile.name.familyName,
          image : profile.photos[0].value
        }

        try {
          let user = await User.findOne({googleId : profile.id})

          if(user){
            done(null, user)
          } else {
            user = await User.create(newUser)
            done(null, user)
          }

        } catch (err) {
          console.error(err);
          
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user);
        });
      });
}


// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth20');
// var GOOGLE_CLIENT_ID = '504839832588-c43gi80l0ssm7brebrfbco2t8qp94jq2.apps.googleusercontent.com';

// GOOGLE_CLIENT_SECRET = 'AyUuyllmm9kPTXZyACVIHw_Y';

// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5500/auth/google/callback"
//     //should be same as the one you registered in credentials.
//   },
//   function(accessToken, refreshToken, profile, done) {
//        User.findOrCreate({ googleId: profile.id }, function (err, user) {
//          return done(err, user);
//        });
//   }
// ));