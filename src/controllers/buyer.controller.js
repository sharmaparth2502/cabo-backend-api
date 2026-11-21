const Buyer = require("../models/Buyer");
const bcrypt = require("bcrypt");

// Buyer Registration
const registerBuyer = async (req, res, next) => {
    try {
        const {
            company,
            email,
            contact,
            phone,
            password,
            procurementTarget,
            companyType
        } = req.body;

        // Required field validation
        if (!company || !email || !contact || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address"
            });
        }

        // Phone validation
        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Phone number must contain exactly 10 digits"
            });
        }

        // Password validation
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }

        // Check existing buyer
        const existingBuyer = await Buyer.findOne({
            email: email.toLowerCase().trim()
        });

        if (existingBuyer) {
            return res.status(409).json({
                success: false,
                message: "A buyer with this email already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create buyer
        const buyer = await Buyer.create({
            company,
            email,
            contact,
            phone,
            password: hashedPassword,
            procurementTarget,
            companyType
        });

        res.status(201).json({
            success: true,
            message: "Buyer registered successfully",
            buyer: {
                id: buyer._id,
                company: buyer.company,
                email: buyer.email,
                contact: buyer.contact,
                phone: buyer.phone,
                procurementTarget: buyer.procurementTarget,
                companyType: buyer.companyType
            }
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "A buyer with this email already exists"
            });
        }

        next(error);
    }
};

module.exports = { registerBuyer };
