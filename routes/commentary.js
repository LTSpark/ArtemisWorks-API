const { Router } = require('express');

const createCommentaryFlow = require('../apis/commentary/createCommentary/flow');
const createCommentaryValidators = require('../apis/commentary/createCommentary/validators');

const updateCommentaryFlow = require('../apis/commentary/updateCommentary/flow');
const updateCommentaryValidators = require('../apis/commentary/updateCommentary/validators');

const router = Router();

router.post('/', createCommentaryValidators, createCommentaryFlow);
router.put('/', updateCommentaryValidators, updateCommentaryFlow);

module.exports = router;