var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');


router.get('/trash/courses', meController.trashCourses);
router.get('/stored/courses', meController.storedCourses);
module.exports = router;
