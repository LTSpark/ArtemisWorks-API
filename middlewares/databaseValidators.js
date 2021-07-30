const Commentary = require('../models/commentary');
const Work = require('../models/work');
const { customErrorResponse } = require('../utils/responses');

const workExists = async( workId ) => {
    const workExists = await Work.findById(workId).exec();
    if(!workExists) {
        throw new Error("Work does not exist");
    }
}

const sameAuthorWork = async(req, res, next) => {
    const { workId } = req.query;
    const work = await Work.findById(workId).exec();
    if( req.user.user_id != work.authorId ) {
        return customErrorResponse(res, "Edit must be done by the original author", 400);
    }
    next();
}

const sameAuthorCommentary = async(req, res, next) => {
    const { commentaryId } = req.query;
    const commentary = await Commentary.findById(commentaryId).exec();
    if( req.user.user_id != commentary.authorId ) {
        return customErrorResponse(res, "Edit must be done by the original author", 400);
    }
    next();
}

const commentaryExists = async( commentaryId ) => {
    const commentaryExists = await Commentary.findById(commentaryId).exec();
    if(!commentaryExists) {
        throw new Error("Commentary does not exist");
    }
}


module.exports = {
    workExists,
    commentaryExists,
    sameAuthorWork,
    sameAuthorCommentary,
};
