const { query } = require('express-validator');

const { authToken } = require('../../../middlewares/authToken');
const { fieldValidation } = require('../../../middlewares/fieldValidation');

const getWorksValidators = [
    authToken,
    query("from", "From has to be positive").optional().isInt({ min: 0 }),
    query("limit", "Limit has to be negative").optional().isInt({ min: 0 }),
    query("search").optional().not().isEmpty(),
    fieldValidation
];

module.exports = getWorksValidators;
