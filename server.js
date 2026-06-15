require("dns").setDefaultResultOrder("ipv4first");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("CampusHire Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");

app.use(
  "/api/auth",
  authRoutes
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});