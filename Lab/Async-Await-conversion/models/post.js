const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  body: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;
