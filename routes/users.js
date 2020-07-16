const express = require("express");
const router = express.Router();
const User = require("../models/User");

// api base - /api/v1/users

// get all users - GET - /api/v1/users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});

// get single user GET - /api/v1/users/:email
router.get("/:email", async (req, res) => {
  try {
    console.log(req.params.email);
    const user = await User.findOne({ email: req.params.email });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
  res.status(200).json({ msg: "Get single users" });
});

// create user - POST - /api/v1/users
router.post("/", (req, res) => {
  User.create(req.body);
  res.status(200).json({ msg: "Create user" });
});

// update user - PUT - /api/v1/users/:id
router.put("/:id", async (req, res) => {
  try {
    const user = new User({
      _id: req.params.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      flat: req.body.flat,
      block: req.body.block,
    });
    User.updateOne({ _id: req.params.id }, user).then((result) => {
      console.log(result);
      res.status(200).json({ message: "User details successfully Updated !." });
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// delele user - DELETE - /api/v1/users/:id
router.delete("/:email", async (req, res) => {
  try {
    User.deleteOne({ email: req.params.email }).then((result) => {
      console.log(result);
      res.status(200).json({ message: "User successfully deleted from DB!" });
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
