const { query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');
const { workExists, sameAuthorWork } = require('../../../middlewares/databaseValidators');

const deleteWorkValidators = [
    authToken,
    sameAuthorWork,
    query('workId').isMongoId(),
    query('workId').custom(workExists),
    fieldValidation
];

module.exports = deleteWorkValidators;
