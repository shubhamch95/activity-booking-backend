const { check } = require('express-validator');

exports.registerValidator = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Valid email is required').isEmail(),
  check('phone', 'Phone must be 10 digits').isLength({ min: 10, max: 10 }),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
];

exports.loginValidator = [
  check('email', 'Valid email is required').isEmail(),
  check('password', 'Password is required').notEmpty()
];
