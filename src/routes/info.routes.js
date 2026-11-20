const express = require("express");
const { getApiInfo } = require("../controllers/info.controller");

const router = express.Router();

router.get("/info", getApiInfo);

module.exports = router;
