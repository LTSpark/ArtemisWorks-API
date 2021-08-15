const Work = require('../../../models/work');
const { customResponse, errorResponse } = require('../../../utils/responses');
const { cloudinaryUpload } = require('../../../services/cloudinaryUpload');

const createWorkFlow = async( req, res ) => {

    const { user_id: authorId, user_name: authorName } = req.user;
    const { description } = req.body;
    const file = req.files.file;

    const hashtags = description.match(/#[a-z]+/gi);
    const workURL = await cloudinaryUpload(file);

    const work = new Work({
        authorId,
        authorName,
        description,
        hashtags,
        workURL,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });

    try {
        await work.save();
        return customResponse(res, "Work created successfully", 201);
    } catch (error) {
        console.log(error);
        return errorResponse(res, "Work creation failed: contact administrator", error, 500);
    }

}

module.exports = createWorkFlow;

