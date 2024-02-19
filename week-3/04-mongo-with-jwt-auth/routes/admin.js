const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  await Admin.create({ username, password });
  res.status(201).send({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (!username || !password) res.status(401);
  const user = Admin.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.send({ token });
  } else {
    res.status(411).send({ message: "Incorrect inputs" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.send({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.send({
    courses,
  });
});

module.exports = router;
