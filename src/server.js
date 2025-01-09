const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

app.get("/api/data", (req, res) => {
  res.send("Data from MongoDB");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
