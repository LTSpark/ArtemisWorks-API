const { body, query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');
const { workExists, sameAuthorWork } = require('../../../middlewares/databaseValidators');

const updateWorkValidators = [
    authToken,
    sameAuthorWork,
    query('workId').isMongoId(),
    query('workId').custom(workExists),
    body('description').isLength({min: 1, max: 300}).trim(),
    fieldValidation
];

module.exports = updateWorkValidators;
