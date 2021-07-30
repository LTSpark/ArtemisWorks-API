const { Router } = require('express');

const getWorksFlow = require('../apis/work/getWorks/flow');
const getWorksValidators = require('../apis/work/getWorks/validators');

const router = Router();

router.get('/', getWorksValidators, getWorksFlow);

module.exports = router;
