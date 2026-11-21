const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        contact: {
            type: String,
            required: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        password: {
            type: String,
            required: true,
            select: false
        },

        procurementTarget: {
            type: String
        },

        companyType: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Buyer", buyerSchema);
