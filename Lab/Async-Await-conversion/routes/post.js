const express = require("express");
const helpers = require("../helpers/helpers");
const PostModel = require("../models/post");
const Router = express.Router();

// GET - postS ROUTER
Router.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find().populate("author");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ ERR: "DB_ERR" });
  }
});

// GET - post BY ID ROUTER
Router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id).populate("author");
    res.render("postDetails", post);
  } catch (error) {
    console.log("Error happened");
    res.status(500).json({ ERR: "DB_ERR" });
  }
});

// POST - post ROUTER
Router.post("/", (req, res) => {
  const post = new PostModel({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });

  try {
    post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.json({ ERR: "DB_ERR" });
  }
});

// DELETE - post ROUTER
Router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findOneAndDelete(id);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.json({ ERR: "DB_ERR" });
  }
});

// PUT/PATCH - EDIT post WITH ID ROUTER
Router.route("/:id")
  .put(async (req, res) => {
    const id = req.params.id;
    const editBody = req.body;
    console.log(editBody);
    try {
      const post = await PostModel.findOneAndUpdate({ _id: id }, editBody);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.json({ ERR: "DB_ERR" });
    }
  })
  .patch(async (req, res) => {
    const id = req.params.id;
    const editBody = req.body;
    console.log(editBody);
    try {
      const post = await PostModel.findOneAndUpdate({ _id: id }, editBody);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.json({ ERR: "DB_ERR" });
    }
  });

module.exports = Router;
