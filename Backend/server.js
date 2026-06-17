const History = require("./models/History");
require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AlgoViz Backend Running ");
});

console.log("Calling connectDB");
connectDB();

app.post("/history", async (req, res) => {

  console.log("Received Data:", req.body);

  try {
    const history = new History(req.body);

    await history.save();

    console.log("Saved to MongoDB ✅");

    res.status(201).json({
      message: "History Saved",
      history,
    });
  } catch (error) {
    console.log("Error:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});
app.get("/history", async (req, res) => {
  try {
    const history = await History.find().sort({ createdAt: -1 });

    res.json(history);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/history/:id", async (req, res) => {
  try {
    await History.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});