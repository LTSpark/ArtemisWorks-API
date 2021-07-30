const cloudinary=require('cloudinary').v2;

cloudinary.config( process.env.CLOUDINARY_URL );

const cloudinaryUpload = async( file ) => {

    const { tempFilePath } = file; //use tempdir to avoid using node fs
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath, {folder:`Artemis`});
    return secure_url;

}

module.exports = {
    cloudinaryUpload
};