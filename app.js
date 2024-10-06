const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const recommendationRoutes = require("./routes/recommendations");
const connectDB = require("./config/db");

// Initialize express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the recommendation routes
app.use("/recommendations", recommendationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
