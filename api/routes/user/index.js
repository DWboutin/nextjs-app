const express = require("express");

const userController = require("../../controllers/user");

const routes = express.Router();

routes.post("/create", userController.create);
routes.get("/read", () => {
  res.send("Hello World");
});

module.exports = routes;
