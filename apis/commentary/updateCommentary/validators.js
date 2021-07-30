const { body, query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');
const { commentaryExists, sameAuthorCommentary } = require('../../../middlewares/databaseValidators');

const updateWorkValidators = [
    authToken,
    sameAuthorCommentary,
    query('commentaryId').isMongoId(),
    query('commentaryId').custom(commentaryExists),
    body('commentary').isLength({min: 1, max: 300}).trim(),
    fieldValidation
];

module.exports = updateWorkValidators;