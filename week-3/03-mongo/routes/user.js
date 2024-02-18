const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  res.send("signup");
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  res.send("course");
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  res.send("single course");
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  res.send("purchsed courses");
});

module.exports = router;
