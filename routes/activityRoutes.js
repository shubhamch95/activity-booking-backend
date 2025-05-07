const express = require('express');
const { getActivities, createActivity } = require('../controllers/activityController');
const { createActivityValidator } = require('../validators/activityValidator');
const { validate } = require('../middleware/validate');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/getActivities', getActivities);
router.post('/createActivity', authenticate, createActivityValidator, validate, createActivity);

module.exports = router;
