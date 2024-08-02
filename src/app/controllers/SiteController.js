const Course = require("../models/Course");
const Thpt_2024 = require("../models/Thpt_2024");

const { multiMongooseToObject } = require("../../util/mongoose");

class SiteController {
    //GET /
    home(req, res, next) {
        res.render("home");
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
}

module.exports = new SiteController();
