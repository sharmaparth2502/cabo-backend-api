const express = require("express");

const {
    registerBuyer,
    loginBuyer,
    getBuyers
} = require("../controllers/buyer.controller");

const router = express.Router();

// Buyer Registration
router.post("/register", registerBuyer);

// Buyer Login
router.post("/login", loginBuyer);

// Get All Buyers
router.get("/", getBuyers);

module.exports = router;
