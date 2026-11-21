const Buyer = require("../models/Buyer");
const bcrypt = require("bcrypt");

// Register Buyer
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

        if (!company || !email || !contact || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address"
            });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Phone number must contain exactly 10 digits"
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long"
            });
        }

        const existingBuyer = await Buyer.findOne({
            email: email.toLowerCase().trim()
        });

        if (existingBuyer) {
            return res.status(409).json({
                success: false,
                message: "A buyer with this email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

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

// Login Buyer
const loginBuyer = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const buyer = await Buyer.findOne({
            email: email.toLowerCase().trim()
        }).select("+password");

        if (!buyer) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            buyer.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        res.status(200).json({
            success: true,
            message: "Buyer login successful",
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
        next(error);
    }
};

module.exports = {
    registerBuyer,
    loginBuyer
};
