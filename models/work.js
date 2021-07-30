const { Schema, model } = require('mongoose');

const WorkSchema = Schema({
    authorName: {
        type: String,
        required: [true, "Name is required"]
    },
    authorId: {
        type: String,
        required: [true, "Id is required"]
    },
    workURL: {
        type: String,
        required: [true, "URL is required"]
    },
    views: {
        type: Number,
        default: 0
    },
    hashtags: [{
        type: String
    }],
    commentaries: [{
        type: Schema.Types.ObjectId,
        ref: 'Commentary'
    }],
    createdAt: {
        type: String,
        required: [true, "Creation date is required"]
    },
    updatedAt: {
        type: String,
        required: [true, "Update date is required"]
    },
    description: {
        type: String
    }
});

module.exports = model('Work', WorkSchema);
