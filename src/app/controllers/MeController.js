const Course = require("../models/Course");

const { mongooseToObject } = require("../../util/mongoose");
const { multiMongooseToObject } = require("../../util/mongoose");

class MeController {
    // GET /me/store/courses
    storedCourses(req, res, next) {
        Course.find()
            .then((courses) => {
                res.render("me/stored-courses", {
                    courses: multiMongooseToObject(courses),
                    title: "Courses",
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
