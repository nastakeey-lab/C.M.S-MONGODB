
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
connectDB();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

app.listen(3000, ()=> console.log("Server running on port 3000"));
