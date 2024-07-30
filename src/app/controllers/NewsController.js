class NewsController {
    //GET /news
    index(req, res) {
        res.render("news");
    }
    show(rep, res) {
        res.send("Loi ko tim thay trang !!!");
    }
}

module.exports = new NewsController();
