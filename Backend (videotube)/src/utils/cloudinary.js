import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePAth) => {
    console.log("Cloudinary config:", cloudinary.config());
    try {
        console.log(localFilePAth)
        if(!localFilePAth) return null

        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePAth, {
            resource_type: "auto"
        })

        //file has benn uploaded successfully
        console.log("file is uploaded on cloudinary ", response.url);
        return response;
    } catch (error) {
        console.log("Cloudinary upload error: ",error)
        fs.unlinkSync(localFilePAth) //remove the locally saved temporary file as upload operation got failed
        return null;
    }

}

export {uploadOnCloudinary}