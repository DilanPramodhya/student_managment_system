const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
var colors = require("colors");

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successfully!".yellow);
});

const studentRouter = require("./routes/Student.js");
app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`.inverse);
});
