const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { multiMongooseToObject } = require("../../util/mongoose");
const { titleToSlug } = require("../../util/edit_db");
const edit_db = require("../../util/edit_db");

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

    home_courses(req, res, next) {
        Course.find()
            .then((courses) => {
                res.render("courses/home_courses", {
                    courses: multiMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }
    //[POST] /courses/store
    async store(req, res, next) {
        const formData = JSON.parse(JSON.stringify(req.body));

        formData.slug = titleToSlug(req.body.title);

        const data = new Course(formData);
        await data.save();

        res.json(formData);
    }
}

module.exports = new CourseController();
