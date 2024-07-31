const Course = require("../models/Course");
const Thpt_2024 = require("../models/Thpt_2024");

class SiteController {
    //GET /
    // async home(req, res, next) {
    //     // res.render("home");

    //     //
    //     try {
    //         const data = await Course.find({});

    //         // res.json(data);
    //         res.render("home");
    //     } catch (error) {
    //         next;
    //     }
    // }
    home(req, res, next) {
        Course.findOne({ author: "VuNguyenCoder" })
            .then((courses) => {
                res.render("home");
                console.log(courses);
            })
            .catch(next);
    }

    async thpt_2024(req, res) {
        try {
            const data_thpt = await Thpt_2024.find({
                ma_ngoai_ngu: "N2",
            });
            console.log(data_thpt.length);
            res.json(data_thpt);
        } catch (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Internal Server Error");
        }
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
