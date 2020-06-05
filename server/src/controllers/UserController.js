const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sequelize } = require("../con");
require("dotenv").config();
const { SECRET_KEY } = process.env;
const UserModel = sequelize.import(
  path.join(__dirname, "..", "models", "User.js")
);
class UserController {
  register = async (req, res) => {
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await UserModel.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        userData.password = hash;
        const newUser = await UserModel.create(userData);
        res.json({ status: newUser.email + " registered" });
      });
    } else {
      res.status(400).json({ error: "User already exists" });
    }
  };
  login = async (req, res) => {
    try {
      const user = await UserModel.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result === true) {
            // console.log(user.dataValues);
            jwt.sign(
              user.dataValues,
              SECRET_KEY,
              { expiresIn: 1440 },
              (err, token) => {
                // res.send(token);
                res.json({ token });
              }
            );
          } else {
            res.status(400).json({ error: "User does not exist" });
          }
        });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  };
}
module.exports = new UserController();
