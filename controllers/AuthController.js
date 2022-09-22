const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const salt = 10;

exports.signup = async (req, res, next) => {
  const password = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({ ...req.body, password });
  res.json({ user });
};

exports.login = async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.status(404).json({
      message: 'User not found',
    });
    return;
  }

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (!result) res.status(404).json({ message: 'User not found' });
    else {
      const token = jwt.sign({ user }, process.env.JWT_SECRET);
      res.status(200).json({ user, acess_token: token });
    }
  });
};
