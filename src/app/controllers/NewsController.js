class NewsController {
    //GET /news
    news(req, res) {
        res.render("news", {title: "News"});
    }
}

module.exports = new NewsController();
