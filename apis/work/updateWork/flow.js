const Work = require('../../../models/work');
const { customResponse, errorResponse } = require('../../../utils/responses');

const updateWorkFlow = async( req, res ) => {

    const { workId } = req.query;
    const { description } = req.body;
    const hashtags = description.match(/#[a-z]+/gi);

    try {
        await Work.findByIdAndUpdate(workId, {
            description,
            hashtags,
            updatedAt: Date.now()
        }).exec();
        return customResponse(res, "Work updated successfully", 201);
    } catch (error) {
        console.log(error);
        return errorResponse(res, "Work update failed: contact administrator", error, 500);
    }

}

module.exports = updateWorkFlow;

