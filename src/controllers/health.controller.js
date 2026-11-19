const getHealth = (req, res) => {
    res.status(200).json({
        success: true,
        message: "CABO Backend API is running!",
        status: "OK"
    });
};

module.exports = { getHealth };