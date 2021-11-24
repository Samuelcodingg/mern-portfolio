const express = require('express');
const router = express.Router();

const { createSkill, getSkills, skillById, photo } = require('../controllers/skillController');

router.get('/list', getSkills);
router.post('/create', createSkill);
router.get('/photo/:skillId', photo);

router.param('skillId', skillById);

module.exports = router;