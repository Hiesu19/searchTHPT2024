const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");
const errorController = require("../app/controllers/ErrorController");

router.get("/search", siteController.search);
router.get("/thpt_2024", siteController.thpt_2024);

router.get("/", siteController.home);
router.get("/*", errorController.show_404);
module.exports = router;
