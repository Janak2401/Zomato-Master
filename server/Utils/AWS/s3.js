import AWS from "aws-sdk";


// AWS bucket config
const s3Bucket = new AWS.S3({
	accessKeyId: "access_key_here",				// Can't expose these 2 keys on public platform due to security reasons
	secretAccessKey: "secret_access_key_here",
	region: "ap-south-1"
});

export const s3Upload = (options) => {
	return new Promise((resolve, reject) => {
		s3Bucket.upload(options, (error,data) => {
			if(error) return reject(error);
			return resolve(data);
		})
	});
};
