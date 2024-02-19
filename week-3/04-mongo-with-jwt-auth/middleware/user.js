const { JWT_SECRET } = require("../config");
const JWT = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const auth = req.headers.authorization;
  console.log(auth);
  const token = auth.split(" ")[1];
  try {
    const decodedValue = JWT.verify(token, JWT_SECRET);
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      res.status(403).send();
    }
  } catch (e) {
    res.json({
      message: "Incorrect inputs",
      error: e,
    });
  }
}

module.exports = userMiddleware;
