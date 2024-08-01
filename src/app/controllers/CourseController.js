const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
    // GET /courses/:slug
    show_course(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                if (course == null) {
                    res.render("error_404");
                } else {
                    res.render("courses/show_course", {
                        course: mongooseToObject(course),
                    });
                }
            })
            .catch(next);
    }
}

module.exports = new CourseController();
