require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./src/routes/health.routes");
const infoRoutes = require("./src/routes/info.routes");
const notFound = require("./src/middleware/notFound");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

// Middleware
app.use(cors({
    origin: [
        "https://sharmaparth2502.github.io",
        "http://localhost:5500"
    ]
}));

app.use(express.json());

// API Routes
app.use("/api", healthRoutes);
app.use("/api", infoRoutes);

// 404 Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandler);

// Server Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`CABO Backend running on port ${PORT}`);
});
