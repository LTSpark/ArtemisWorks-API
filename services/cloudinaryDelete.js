const cloudinary=require('cloudinary').v2;

cloudinary.config( process.env.CLOUDINARY_URL );

const cloudinaryDelete = async( workURL ) => {

    const splittedUrl = workURL.split('/');
    const [ name ] = splittedUrl[splittedUrl.length-1].split('.');//get public_id and  cut the extension
    cloudinary.uploader.destroy( `Artemis/${name}` );

}

module.exports = {
    cloudinaryDelete
};
