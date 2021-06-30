import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from 'passport-google-oauth20';
import passport from 'passport';
import User, { UserSchema } from '../models/user';

passport.serializeUser((user: UserSchema, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err: any, user: any) => {
    if (err) {
      console.error('Failed to deserialize user');
      done(err);
    }

    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: VerifyCallback,
    ) => {
      const user = await User.findOne({ oauthId: profile.id });

      // User already exists
      if (user) {
        done(null, user);
        return;
      }

      const newUser = new User({
        oauthId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        profilePic: profile._json['picture'],
      });

      newUser.save();

      done(null, newUser);
    },
  ),
);
