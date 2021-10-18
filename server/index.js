// env variable
require("dotenv").config();

import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Order";
import Review from "./API/Review";
import User from "./API/User";

// Mongo Database connection
import ConnectDB from "./database/connection";

// Importing and using express
import express from "express";
const zomato = express();


zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport config
googleAuthConfig(passport);
routeConfig(passport);

// For application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);


zomato.get("/", (req,res) => res.json({message: "Setup successful"}));


// Setting port
zomato.listen(4000, () => ConnectDB().then(() => 
	console.log("Server is up and running")).catch(() => 
		console.log("Database connection failed")));
