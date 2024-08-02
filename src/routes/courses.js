const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CourseController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/", coursesController.home_courses);
router.get("/:slug", coursesController.show_course);

module.exports = router;
