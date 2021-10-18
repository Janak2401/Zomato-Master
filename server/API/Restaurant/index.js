import express from "express";
import { RestaurantModel } from "../../database/allModels";

// Validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../Validation/restaurant";
import { ValidateRestaurantId } from "../../Validation/food";

const Router = express.Router();

/*
Route 			/
Descrip			Get all restaurant details
Params			None
Access			Public
Method			GET
*/
Router.get("/", async(req, res) => {
	try {
		await ValidateRestaurantCity(req.query);

		const {city} = req.query;
		const restaurants = await RestaurantModel.find({city});
		return res.json({restaurants});
	} catch(error) {
		return res.status(500).json({error: error.message});
	}
});

// ------------------------------------------------------------------------------------------------
/*
Route 			/
Descrip			Get particular restaurant details by id
Params			_id
Access			Public
Method			GET
*/
Router.get("/:_id", async(req, res) => {
	try {
		await ValidateRestaurantId(req.params);

		const { _id } = req.params;
		const restaurant = await RestaurantModel.findOne(_id);

		if(!restaurant)
		return res.status(404).json({error: "Restaurant not found"});

		return res.json({restaurant});

	} catch(error) {
		return res.status(500).json({error: error.message});
	}
});

// ------------------------------------------------------------------------------------------------
/*
Route 			/
Descrip			Get particular restaurant details on search
Params			None
Body			search string
Access			Public
Method			GET
*/
Router.get("/search", async(req, res) => {
	try {
		await ValidateRestaurantSearchString(req.body);

		const { searchString } = req.body;
		const restaurants = await RestaurantModel.find({
			name: {$regex: searchString, $options: "i"},
		});
	} catch(error) {
		return res.status(500).json({error: error.message});
	}
});

export default Router;
