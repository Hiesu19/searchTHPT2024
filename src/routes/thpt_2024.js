const express = require("express");
const router = express.Router();

const thpt_2024Controller = require("../app/controllers/Thpt_2024Controller");

router.get("/", thpt_2024Controller.home);
router.get("/show", thpt_2024Controller.show);

module.exports = router;
