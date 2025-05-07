const { check } = require('express-validator');

exports.createActivityValidator = [
  check('title', 'Title is required').notEmpty(),
  check('description', 'Description is required').notEmpty(),
  check('location', 'Location is required').notEmpty(),
  check('date', 'Date must be a valid date').isISO8601(),
  check('time', 'Time is required').notEmpty()
];
