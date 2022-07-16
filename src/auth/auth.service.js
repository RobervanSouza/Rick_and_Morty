const Jwt = require('jsonwebtoken');
const User = require('../users/Users');

const loginService = (email) =>
  User.findOne({ email: email }).select('+password');

const generateToken = (userId) => {
   return Jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });
};

module.exports = { loginService, generateToken, };
