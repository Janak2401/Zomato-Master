import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

// The below code is like a boilerplate for google strategy, just understand it.

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
	passport.use(
		new GoogleStrategy(
		{
			clientID: "1003691024980-ikr3sf0duemcovnrh5fduhc95q8kb1m1.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "http://localhost:4000/auth/google/callback"
		},
		async(accessToken, refreshToken, profile, done) => {

			// Creating a new user
			const newUser = {
				fullname: profile.displayName,
				email: profile.emails[0].value,
				profilePic: profile.photos[0].value
			};
			try {
				//Check whether user exists or not
				const user = await UserModel.findOne({email: newUser.email});
				if (user) {
					// Generating JWT token
					const token = user.generateJwtToken();
					
					// return user
					done(null, {user,token});
				} else {
					// create a new user
					const user = await UserModel.create(newUser);
					
					// Generating JWT token
					const token = user.generateJwtToken();

					// return user
					done(null, {user,token});
				}
			} catch(error) {
				done(error, null);
			}
		}
		)
	);
	passport.serializeUser((userData, done) => done(null, {...userData}));
	passport.deserializeUser((id, done) => done(null, id));
};
