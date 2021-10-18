// Libraries
import express from	"express";
import AWS from "aws-sdk";
import multer from "multer";

// Utilities
import {s3Upload} from "../../Utils/AWS/s3";

// Database model
import {ImageModel} from "../../database/allModels";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route 			/
Descrip			Uploading given image to S3 bucket and saving file to MongoDB
Params			None
Access			Public
Method			Post
*/
Router.post("/", upload.single("file"), async(req,res) => {
	try {
		const file = req.file;
		
		// S3 bucket options
		const bucketOptions = {
			Bucket: "shapeaijulyzomato",
			Key: file.originalname,
			Body: file.buffer,
			ContentType: file.mimetype,
			ACL: "public-read"
		};

		const uploadImage = await s3Upload(bucketOptions);

		return res.status(200).json({ uploadImage });

	} catch(error) {
		return res.status(500).json({error: error.message});
	}
});

export default Router;
