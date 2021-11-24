const express = require('express');
const router = express.Router();

const { createSkill, getSkills, skillById, photo, updatePhoto } = require('../controllers/skillController');

router.get('/list', getSkills);
router.post('/create', createSkill);
router.get('/photo/:skillId', photo);
router.put('/photo/:skillId', updatePhoto);

router.param('skillId', skillById);

module.exports = router;