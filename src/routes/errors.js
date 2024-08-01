const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/ErrorController");

router.get("", coursesController.show_404);

module.exports = router;
