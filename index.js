const express = require("express");

const healthRoutes = require("./src/routes/health.routes");
const notFound = require("./src/middleware/notFound");

const app = express();

app.use(express.json());

app.use("/api", healthRoutes);

app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`CABO Backend running on port ${PORT}`);
});