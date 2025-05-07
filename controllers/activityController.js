const Activity = require('../models/Activity');

exports.createActivity = async (req, res) => {
  const { title, description, location, date, time } = req.body;

  try {
    const newActivity = new Activity({
      title,
      description,
      location,
      date,
      time,
    });

    await newActivity.save();
    res.status(201).json({ message: 'Activity created successfully', activity: newActivity });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getActivities = async (req, res) => {
    try {
      const activities = await Activity.find();
      res.status(200).json(activities);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
