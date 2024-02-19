const { JWT_SECRET } = require("../config");
const JWT = require("jsonwebtoken");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB.
  // Check readme for the exact headers to be expected
  // const token = req.headers.authorization; // bearer token
  //   const words = token.split(" "); // ["Bearer", "token"]
  //   const jwtToken = words[1]; // token
  //   try {
  //       const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  //       if (decodedValue.username) {
  //           next();
  //       } else {
  //           res.status(403).json({
  //               msg: "You are not authenticated"
  //           })
  //       }
  //   } catch(e) {
  //       res.json({
  //           msg: "Incorrect inputs"
  //       })
  //   }

  const auth = req.headers.authorization;
  const token = auth.split(" ")[1];
  try {
    const decodedValue = JWT.verify(token, JWT_SECRET);
    if (decodedValue.username) {
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

module.exports = adminMiddleware;
