const Course = require("../models/Course");
const Thpt_2024 = require("../models/Thpt_2024");

class SiteController {
    //GET /
    home(req, res, next) {
        Course.find()
            .then((courses) => {
                courses = courses.map((courses) => courses.toObject());
                res.render("home", { courses });
            })
            .catch(next);
    }
    //GET
    thpt_2024(req, res, next) {
        Thpt_2024.findOne({ sbd: "10000001" })
            .then((data_thpt) => {
                res.render("home");
                console.log(data_thpt);
            })
            .catch(next);
    }

    //GET /search
    search(req, res) {
        res.render("search");
    }
    show_404(rep, res) {
        // res.send("Loi ko tim thay trang !!!");
        res.render("error_404");
    }
}

module.exports = new SiteController();
