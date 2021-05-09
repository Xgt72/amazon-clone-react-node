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
const { createToken } = require("../controllers/authentication");

usersRouter.get("/", getAllUsers);
usersRouter.post("/register", createOneUser, getOneUserById);
usersRouter.post("/login", getOneUserByEmail, passwordIsValid, createToken);
usersRouter.put("/:id", updateOneUser, getOneUserById);
usersRouter.delete("/:id", deleteOneUser);

module.exports = usersRouter;
