const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  await User.create({ username, password });
  res.send("signup");
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.send({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    { username },
    {
      $push: {
        courses: courseId,
      },
    }
  );

  res.send({ message: "Purchase Complete" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;

  // One way of doing things
  /*
  const purchasedCourses = await User.findOne({ username }).populate("courses");
  res.send({
    purchasedCourses,
  });*/
  const user = await User.findOne({ username });
  const courses = await Course.find({
    _id: {
      $in: user.courses,
    },
  });

  res.send({
    purchasedCourses: courses,
  });
});

module.exports = router;
