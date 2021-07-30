const Commentary = require('../../../models/commentary');
const { customResponse, errorResponse } = require('../../../utils/responses');

const updateCommentaryFlow = async( req, res ) => {

    const { commentaryId } = req.query;
    const { commentary } = req.body;

    try {
        await Commentary.findByIdAndUpdate(commentaryId, {
            commentary,
            updatedAt: Date.now()
        }).exec();
        return customResponse(res, "Commentary updated successfully", 201);
    } catch (error) {
        console.log(error);
        return errorResponse(res, "Commentary update failed: contact administrator", error, 500);
    }
}

module.exports = updateCommentaryFlow;