const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

const test = require('../test/test');

router.get('/', test.testReturn);

module.exports = router;