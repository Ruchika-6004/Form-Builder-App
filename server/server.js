const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const formRoutes = require("./routes/formRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/forms", formRoutes);
app.use("/api/responses", responseRoutes);

// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/formBuilder")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Database error:", err);
  });

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
