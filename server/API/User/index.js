// Libraries
import express from "express";

// Database Model
import {UserModel} from "../../database/allModels";

const Router = express.Router();

/*
Route 			/
Descrip			Get an user data
Params			_id
Access			Public
Method			get
*/
Router.get("/:_id", async(req,res) => {
	try {
		const { _id } = req.params;
		
		const getUser = await UserModel.findById(_id);

		return res.json({user: getUser});

	} catch(error) {
		return res.status(500).json({error: error.message});
	}
});

// ------------------------------------------------------------------------------------------------
/*
Route 			/update
Descrip			Update an user data
Params			userId
Access			Public
Method			Put
*/
Router.put("/update/:userId", async(req,res) => {
	try {
		const {userId} = req.params;
		const {userData} = req.body;

		const updateUserData = await UserModel.findByIdAndUpdate(
			userId,
			{$set: userData},
			{new: true}
		);

		return res.json({user: updateUserData});

	} catch(error) {
		return res.status(500).json({error: error.message});
	}
});

export default Router;
