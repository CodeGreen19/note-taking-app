const express = require("express");
const cors = require("cors");
const app = express();
const errorMiddleware = require("./middlewares/errorMiddleware.js");

// initialized env variables
require("dotenv").config();

//handle cross origin errors
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// Using Middlewares
app.use(express.json({ limit: "100mb" }));

// import router
app.use("/api/note", require("./routes/note.js"));

// error middleware
app.use(errorMiddleware);

module.exports = app;
