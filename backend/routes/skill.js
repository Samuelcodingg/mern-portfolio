const express = require('express');
const { createSkill } = require('../controllers/skillController');
const router = express.Router();

router.post('/create', createSkill);

module.exports = router;