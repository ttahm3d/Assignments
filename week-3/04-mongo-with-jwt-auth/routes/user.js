const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  await User.create({ username, password });
  res.status(201).json({
    messsage: "User Created successfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (!username || !password) res.status(401);
  const user = User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.send({ token });
  } else {
    res.status(411).send({ message: "Incorrect inputs" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        courses: req.params.courseId,
      },
    }
  );
  res.send({ message: "Purchase Complete" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.username });
  const purchasedCourses = await Course.find({
    _id: {
      $in: user.courses,
    },
  });
  console.log(purchasedCourses);
  res.send({ purchasedCourses });
});

module.exports = router;
