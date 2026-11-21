const express = require("express");
const { registerBuyer } = require("../controllers/buyer.controller");

const router = express.Router();

router.post("/register", registerBuyer);

module.exports = router;
