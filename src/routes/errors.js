const express = require("express");
const router = express.Router();

const errorController = require("../app/controllers/ErrorController");

router.get("", errorController.show_404);

module.exports = router;
