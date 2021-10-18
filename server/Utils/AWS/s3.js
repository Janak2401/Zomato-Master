import AWS from "aws-sdk";


// AWS bucket config
const s3Bucket = new AWS.S3({
	accessKeyId: "AKIA2UAP5SQNS6HSP7HA",
	secretAccessKey: "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",
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
