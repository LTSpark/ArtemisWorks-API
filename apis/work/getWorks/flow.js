const { ObjectId } = require('mongoose').Types;
const Work = require("../../../models/work");

const { customErrorResponse, errorResponse } = require("../../../utils/responses");
const invalidObjectResponse = "Invalid MongoID, if you want to search hashtag, then add # at first";

const getWorksFlow = async (req, res) => {

    const { from, limit, search } = req.query;
    let query = {}
    
    if(search){
        if (search.charAt(0) === "#"){
            const regex = new RegExp(search,'i');
            query = { hashtags: {$in: regex} };
        }
        else {
            if(!ObjectId.isValid(search)){
                return customErrorResponse(res, invalidObjectResponse, 400);
            }
            query = { authorId: search };
        }
    }
    
    try {

        const work = await Work.find(query)
                                .populate('commentaries')
                                .skip(Number(from))
                                .limit(Number(limit))
        .exec();

        return res.send(work);

    } catch (error) {
        console.log(error);
        return errorResponse(res, "Getting works failed: contact database administrator", error, 500);
    }

}

module.exports = getWorksFlow;
