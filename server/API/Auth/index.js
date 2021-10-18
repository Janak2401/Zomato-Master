import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

// Models
import { UserModel } from "../../database/user";

// Validation
import { ValidateSignUp, ValidateSignIn } from "../../Validation/auth";

/*
Route 			/signup
Descrip			Signup with email and password
Params			None
Access			Public
Method			POST
*/
Router.post("/signup", async(req,res) => {
	try {

		await ValidateSignUp(req.body.credentials);
		
		// passing the params to check if user already exists
		await UserModel.findEmailAndPhone(req.body.credentials);

		// Database
		const newUser = await UserModel.create(req.body.credentials);

		//JWT Auth Token
		const token = newUser.generateJwtToken();

		// 200 signifies everything working fine. So this states that if fine, return token in json
		return res.status(200).json({token});
	}
	catch (error) {
		return res.status(500).json({error: error.message});
	}
});

// ------------------------------------------------------------------------------------------------
/*
Route 			/signin
Descrip			Signin with email and password
Params			None
Access			Public
Method			POST
*/
Router.post("/signin", async(req,res) => {
	try {

		await ValidateSignIn(req.body.credentials);
		
		const doesUserExist = await UserModel.findByEmailAndPassword(
			req.body.credentials
		);

		//JWT Auth Token
		const token = doesUserExist.generateJwtToken();

		// 200 signifies everything working fine. So this states that if fine, return token in json
		return res.status(200).json({token});
	}
	catch (error) {
		return res.status(500).json({error: error.message});
	}
});

// --------------------------------------------------------------------------------------------------
/*
Route 			/google
Descrip			Google signin
Params			None
Access			Public
Method			GET
*/
Router.get("/google", passport.authenticate("google", {
	scope:[
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email"
	],
}));

// --------------------------------------------------------------------------------------------------
/*
Route 			/google/callback
Descrip			Google signin callback
Params			None
Access			Public
Method			GET
*/
Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
	(req,res) => {
  		return res.json({token: req.session.passport.user.token});
	}
);

export default Router;
