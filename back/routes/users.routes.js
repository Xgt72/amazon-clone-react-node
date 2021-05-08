const usersRouter = require("express").Router();
const { getCollection } = require("../controllers/users");

usersRouter.get("/", getCollection);

module.exports = usersRouter;