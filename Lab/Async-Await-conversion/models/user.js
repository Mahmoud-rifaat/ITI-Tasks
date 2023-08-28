const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/,
  },
  age: Number,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
