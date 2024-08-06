const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const { multiMongooseToObject } = require("../../util/mongoose");

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
                        title: course.title,
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
                    title: "Courses",
                });
            })
            .catch(next);
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render("courses/create", { title: "Trang tạo khoá học" });
    }
    //[POST] /courses/store
    store(req, res, next) {
        const formData = JSON.parse(JSON.stringify(req.body));

        // formData.slug = titleToSlug(req.body.title);

        const data = new Course(formData);
        data.save()
            .then(() => res.redirect("/"))
            .catch((error) => {});
    }
    // /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((courses) => {
                res.render("courses/edit", {
                    courses: mongooseToObject(courses),
                    title: "Cập nhật",
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
