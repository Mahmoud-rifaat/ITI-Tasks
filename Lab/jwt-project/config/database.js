const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tryingJWT";

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
    });
};
