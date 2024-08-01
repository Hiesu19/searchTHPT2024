class NewsController {
    //GET /news
    index(req, res) {
        res.render("news");
    }
    show_404(rep, res) {
        // res.send("Loi ko tim thay trang !!!");
        res.render("error_404");
    }
}

module.exports = new NewsController();
