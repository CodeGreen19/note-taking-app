const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = require("./app");

// connected with database
connectDB();

//// delployment code ................................

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
//// delployment code ................................

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running port : ${process.env.PORT || 8000}`);
});
