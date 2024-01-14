const path = require("path");
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");

const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 3000;

// Connect to Mongo database
connectDB();

const app = express();

app.use(cors());

// Middlewares
app.use(express.json({limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(errorHandler);

// Routes
app.use("/api/users", require("./routes/userRoutes"));

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

// Serve front end in production
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(__dirname, "../", "frontend", "build", "index.html")
  );
} else {
  // Default route
  app.get("/", (res) => {
    res.status(200).json({ message: "Welcome to Support Desk API" });
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
