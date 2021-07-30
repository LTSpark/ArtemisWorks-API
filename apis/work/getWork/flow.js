const Work = require('../../../models/work');
const { errorResponse } = require('../../../utils/responses');

const getWorkFlow = async (req, res) => {

    const { workId } = req.query;
    const addView = 1;

    try {       
        const work = await Work.findByIdAndUpdate(
            workId, {
                $inc : { views: addView }
            }, {
                new: true
            }
        ).populate('commentaries').exec();
        return res.send(work);
    } catch (error) {
        console.log(error);
        return errorResponse(res, "Error: contact administrator", error, 500);
    }

}

module.exports = getWorkFlow;