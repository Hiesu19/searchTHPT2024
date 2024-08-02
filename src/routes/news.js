const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");
const errorController = require("../app/controllers/ErrorController");

router.get("/", newsController.news);
// router.get("/*", errorController.show_404);

module.exports = router;
