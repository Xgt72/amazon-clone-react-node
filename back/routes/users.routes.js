const usersRouter = require("express").Router();
const {
  getAllUsers,
  getOneUserById,
  getOneUserByEmail,
  createOneUser,
  updateOneUser,
  deleteOneUser,
  passwordIsValid,
} = require("../controllers/users");
const { getAllOrdersByUserId } = require("../controllers/orders");
const {
  createToken,
  authenticateWithJsonWebToken,
} = require("../controllers/jwt");

usersRouter.get("/", getAllUsers);
usersRouter.post("/register", createOneUser, getOneUserById);
usersRouter.post("/login", getOneUserByEmail, passwordIsValid, createToken);
usersRouter.put(
  "/:id",
  authenticateWithJsonWebToken,
  updateOneUser,
  getOneUserById
);
usersRouter.delete("/:id", authenticateWithJsonWebToken, deleteOneUser);
usersRouter.get("/:id/orders", getAllOrdersByUserId);

module.exports = usersRouter;
