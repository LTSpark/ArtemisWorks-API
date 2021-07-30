const express = require('express');
const router  = express.Router();

const work  = require('./work');
const works = require('./works');
const commentary = require('./commentary');

router.use('/work', work);
router.use('/works', works);
router.use('/commentary', commentary);

module.exports = router;
