const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  const userId = req.user.userId;
  const { activityId } = req.body;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const booking = new Booking({
      user: userId,
      activity: activityId,
    });

    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMyBookings = async (req, res) => {
  const userId = req.user.userId;

  try {
    const bookings = await Booking.find({ user: userId }).populate('activity');
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
