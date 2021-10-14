import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
	fullname: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String},
	address: [{
		detail: {type: String},
		for: {type: String}
	}],
	phoneNumber: [{type: Number}]
},
	{timestamps: true}
);

UserSchema.methods.generateJwtToken = function() {
	return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async ({ email, phoneNumber }) => {
	// check whether email exists
	const checkUserByEmail = await UserModel.findOne({email});

	// check whether phone number exists
	const checkUserByPhone = await UserModel.findOne({phoneNumber});

	if (checkUserByPhone || checkUserByEmail) {
		throw new Error("User already exists");
	}

	return false;
};

UserSchema.pre("save", function(next) {
	const user = this;

	// Checks whether password is NOT modified
	if (!user.isModified("password")) return next();

	// Generating bcrypt salt
	bcrypt.genSalt(8, (error, salt) => {
		if (error) return next(error);

		// Hashing the password
		bcrypt.hash(user.password, salt, (error,hash) => {
			if (error) return next(error);

			// Assigning the hashed password
			user.password = hash;
			return next();
		});
	});
});

export const UserModel = mongoose.model("Users", UserSchema);
