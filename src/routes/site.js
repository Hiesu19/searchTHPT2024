const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.get("/thpt_2024", siteController.thpt_2024);

router.get("/:slug", siteController.show_404);
router.get("/", siteController.home);

module.exports = router;
