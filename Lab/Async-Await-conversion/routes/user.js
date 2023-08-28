const express = require("express");
const UserModel = require("../models/user");
const Router = express.Router();

// Application level middleware
Router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ ERR: "DB_ERR" });
  }
});

Router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    res.render("userDetails", user);
    // res.json(users);
  } catch (error) {
    console.log("Err happened in get user");
    res.status(500).json({ ERR: "DB_ERR" });
  }
});

Router.post("/", async (req, res, next) => {
  //express-validator
  const user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
  });

  try {
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ ERR: "DB_ERR" });
  }
});

Router.delete("/:id", async (req, res) => {
  try {
    const user = await UserModel.findOneAndDelete(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ ERR: "DB_ERR" });
  }
});

Router.route("/:id")
  .put(async (req, res) => {
    const id = req.params.id;
    const editBody = req.body;
    console.log(editBody);

    try {
      const user = await UserModel.findOneAndUpdate({ _id: id }, editBody);
      res.json(user);
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
      const user = await UserModel.findOneAndUpdate({ _id: id }, editBody);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.json({ ERR: "DB_ERR" });
    }
  });

module.exports = Router;
