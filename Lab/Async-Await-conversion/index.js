const express = require("express");
const path = require("path");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const port = process.env.EXPRESS_SERVER_PORT || 5008;
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/postsApp"; // if local

const app = express();
// 3rd party middleware to parse response body in json.
app.use(express.json());

// For Sending Static content
app.use(express.static("public"));

// Setting up the blade engine
app.set("views", path.join("views"));
app.set("view engine", "hbs");

// Routers
app.use("/user", userRouter);
app.use("/post", postRouter);

// Error handling middleware - called whenever we call "next" with a parameter.
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// Connecting the database
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(MONGODB_URL);
  console.log("Connected to DB");
} catch (error) {
  console.log(error);
}

app.listen(port, (err) => {
  if (!err) console.log(`Server listening to port ${port}`);
  else console.log(`Error listening on port ${port} , ${err}.`);
});
