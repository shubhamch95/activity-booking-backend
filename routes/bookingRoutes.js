const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/bookActivity', authenticate, bookActivity);

router.get('/myBooking', authenticate, getMyBookings);

module.exports = router;
