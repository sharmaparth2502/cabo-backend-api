const express = require("express");

const {
    registerBuyer,
    loginBuyer
} = require("../controllers/buyer.controller");

const router = express.Router();

// Buyer Registration
router.post("/register", registerBuyer);

// Buyer Login
router.post("/login", loginBuyer);

module.exports = router;
