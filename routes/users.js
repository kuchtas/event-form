const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/Users");

router.post(
  "/",
  [
    check("name", "Name should not be empty").isLength({
      min: 1,
    }),
    check("surname", "Surname should not be empty").isLength({
      min: 1,
    }),
    check("email", "Email should be valid and not empty").isEmail().isLength({
      min: 1,
    }),
    check("date", "Date should not be empty").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        date: req.body.date,
      });

      user
        .save()
        .then((data) => res.status(200).json(data))
        .catch((err) => {
          res.status(400).json(error);
        });
    }
  }
);

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
