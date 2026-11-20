const getApiInfo = (req, res) => {
    res.status(200).json({
        success: true,
        name: "CABO Backend API",
        description: "Backend API for a Solar Carbon Credit Marketplace",
        version: "1.0.0",
        endpoints: {
            health: "GET /api/health",
            info: "GET /api/info"
        }
    });
};

module.exports = { getApiInfo };
