const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const studentRoutes = require("./routes/studentRoutes");
const attendantRoutes = require("./routes/attendantRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/students", studentRoutes);
app.use("/attendants", attendantRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

