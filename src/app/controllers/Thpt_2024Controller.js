const Thpt_2024 = require("../models/Thpt_2024");
const { mongooseToObject } = require("../../util/mongoose");
const { multiMongooseToObject } = require("../../util/mongoose");

class Thpt_2024Controller {
    // [GET] /
    home(req, res, next) {
        res.render("thpt_2024/home", { title: "tra cuu 2024" });
    }

    // [GET] /thpt_2024/show
    show(req, res, next) {
        const data = req.query.sbd;

        Thpt_2024.findOne({ sbd: data })
            .then((thpt_2024) => {
                res.render("thpt_2024/show", {
                    data: mongooseToObject(thpt_2024),
                    title: "Kết quả",
                });
            })
            .catch(next);
    }
}

module.exports = new Thpt_2024Controller();
