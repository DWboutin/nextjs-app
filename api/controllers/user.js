const User = require("../models/User");

function create(req, res, next) {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      next(err);
    }

    res.status(200).json(user);
  });
}

function read(req, res, next) {
  User.find({}, (err, users) => {
    if (err) {
      next(err);
    }

    res.status(200).json(users);
  });
}

module.exports = {
  create,
  read,
};
