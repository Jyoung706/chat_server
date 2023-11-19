const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("this is new chat server");
});

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to database"))
  .catch((e) => {
    console.error(e);
  });

module.exports = app;
