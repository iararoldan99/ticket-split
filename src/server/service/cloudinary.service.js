import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImage = async (imageBuffer) => {

  const uploadResult = new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        console.error('Error uploading to Cloudinary:', error);
        reject(error.message);
      }
      resolve(result.secure_url);
    }).end(imageBuffer);
  })
    .then((result) => {
      return result;
    })

  return uploadResult;
};
