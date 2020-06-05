const express = require("express");
const cors = require("cors");
const usersRoute = express.Router();
const UserController = require("../controllers/UserController");

usersRoute.use(cors());
usersRoute.post("/register", UserController.register);

usersRoute.post("/login", UserController.login);

module.exports = usersRoute;
