const { query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { workExists } = require('../../../middlewares/databaseValidators');
const { authToken } = require('../../../middlewares/authToken');

const getWorkValidators = [
    authToken,
    query('workId').isMongoId(),
    query('workId').custom(workExists),
    fieldValidation
];

module.exports = getWorkValidators;