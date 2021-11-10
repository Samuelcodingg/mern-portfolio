const express = require('express');
const router = express.Router();

const { getCoders, createCoder, coderById, photo } = require('../controllers/coderController');

router.get('/list', getCoders);
router.post('/create', createCoder);
router.get('/photo/:coderId', photo);

router.param('coderId', coderById);

module.exports = router;