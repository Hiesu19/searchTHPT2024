class NewsController {
    //GET /news
    news(req, res) {
        res.render("news");
    }
}

module.exports = new NewsController();
