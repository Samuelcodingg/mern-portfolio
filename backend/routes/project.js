const express = require('express');
const router = express.Router();

const { create, getProjects, projectById, getProjectById, photo, updatePhoto } = require('../controllers/projectController');

router.post('/create', create);
router.get('/list', getProjects);
router.get('/list/:projectId', getProjectById);
router.get('/photo/:projectId', photo);
router.put('/photo/:projectId', updatePhoto);

router.param('projectId', projectById);

module.exports = router;