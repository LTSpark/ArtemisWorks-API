const { Schema, model } = require('mongoose');

const CommentarySchema = Schema({
    workId: {
        type: Schema.Types.ObjectId,
        ref: 'Work',
        required: [true, "WorkId is required"]
    },
    authorId: {
        type: String,
        required: [true, "Id is required"]
    },
    authorName: {
        type: String,
        required: [true, "Name is required"]
    },
    commentary: {
        type: String,
        required: [true, "Commentary is required"]
    },
    createdAt: {
        type: String,
        required: [true, "Date is required"]
    },
    updatedAt: {
        type: String,
        required: [true, "Date is required"]
    }
});

module.exports = model('Commentary', CommentarySchema);
