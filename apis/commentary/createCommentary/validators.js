const { body, query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { workExists } = require('../../../middlewares/databaseValidators');
const { authToken } = require('../../../middlewares/authToken');

const createCommentaryValidators = [
    authToken,
    query('workId').isMongoId(),
    query('workId').custom(workExists),
    body('commentary').isLength({min: 1, max: 300}).trim(),
    fieldValidation
];

module.exports = createCommentaryValidators;