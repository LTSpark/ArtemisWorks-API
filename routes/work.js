const { Router } = require('express');

const createWorkFlow = require('../apis/work/createWork/flow');
const createWorkValidators = require('../apis/work/createWork/validators');

const getWorkFlow = require('../apis/work/getWork/flow');
const getWorkValidators = require('../apis/work/getWork/validators');

const updateWorkFlow = require('../apis/work/updateWork/flow');
const updateWorkValidators = require('../apis/work/updateWork/validators');

const deleteWorkFlow = require('../apis/work/deleteWork/flow');
const deleteWorkValidators = require('../apis/work/deleteWork/validators');

const router = Router();

router.post('/', createWorkValidators, createWorkFlow);
router.get('/', getWorkValidators, getWorkFlow);
router.put('/', updateWorkValidators, updateWorkFlow);
router.delete('/', deleteWorkValidators, deleteWorkFlow);

module.exports = router;
