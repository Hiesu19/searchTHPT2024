class SiteController {
    //GET /
    home(req, res) {
        res.render("home");
    }

    //GET /search
    search(req, res) {
        res.render("search");
    }
    show(rep, res) {
        res.send("Loi ko tim thay trang !!!");
    }
}

module.exports = new SiteController();
