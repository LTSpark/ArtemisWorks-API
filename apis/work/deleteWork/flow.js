const Work = require('../../../models/work');
const { customResponse, errorResponse } = require('../../../utils/responses');
const { cloudinaryDelete } = require('../../../services/cloudinaryDelete');

const deleteWorkFlow = async( req, res ) => {

    const { workId } = req.query;

    try {
        const workDB = await Work.findByIdAndRemove(workId).exec();
        cloudinaryDelete(workDB.workURL);
        return customResponse(res, "Work deleted successfully", 201);
    } catch (error) {
        console.log(error);
        return errorResponse(res, "Work deletion failed: contact administrator", error, 500);
    }

}

module.exports = deleteWorkFlow;
