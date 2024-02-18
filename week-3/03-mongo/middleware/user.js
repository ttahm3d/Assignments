const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB.
  // Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  if (!username || !password) {
    res.status(404);
  }
  User.findOne({ username, password }).then((result) =>
    result
      ? next()
      : res.status(403).json({
          message: "No such user exists",
        })
  );
}

module.exports = userMiddleware;
