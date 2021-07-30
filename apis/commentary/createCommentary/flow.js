const mongoose = require('mongoose');

const Work = require('../../../models/work');
const Commentary = require('../../../models/commentary');

const { customResponse, errorResponse } = require('../../../utils/responses');

const createCommentaryFlow = async( req, res ) => {

    const { user_id: authorId, user_name: authorName } = req.user;
    const { workId } = req.query;
    const { commentary } = req.body;

    const newCommentary = new Commentary({
        authorId,
        authorName,
        commentary,
        workId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });

    const session=await mongoose.startSession();
    session.startTransaction();

    try {
        const commentaryDB = await newCommentary.save();
        await Work.findByIdAndUpdate(workId, { $addToSet: {commentaries: commentaryDB._id}}).exec();
        session.commitTransaction();
        return customResponse(res, "Commentary created successfully", 201);
    } catch (error) {
        console.log(error);
        await session.abortTransaction();
        return errorResponse(res, "Commentary creation failed: contact administrator", error, 500);
    } finally{
        session.endSession();
    }

}

module.exports = createCommentaryFlow;