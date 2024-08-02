class ErrorController {
    // GET error page
    show_404(rep, res) {
        res.render("error_404");
    }
}

module.exports = new ErrorController();
