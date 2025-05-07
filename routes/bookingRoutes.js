// routes/bookingRoutes.js
const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to book an activity (requires auth)
router.post('/bookActivity', authenticate, bookActivity);

// Route to get all bookings by the logged-in user
router.get('/myBooking', authenticate, getMyBookings);

module.exports = router;
