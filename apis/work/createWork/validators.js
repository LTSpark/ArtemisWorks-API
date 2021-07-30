const { body } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { fileValidator, fileExtensionValidator } = require('../../../middlewares/customValidators');
const { authToken } = require('../../../middlewares/authToken');

const createWorkValidators = [
    authToken,
    fileValidator,
    fileExtensionValidator,
    body('description').optional().isLength({min: 0, max: 300}).trim(),
    fieldValidation
];

module.exports = createWorkValidators;
