const usersRouter = require("express").Router();
const {
    getAllUsers,
    getOneUserById,
    getOneUserByEmailAndPassword,
    createOneUser,
    updateOneUser,
    deleteOneUser,
} = require("../controllers/users");

usersRouter.get("/", getAllUsers);
usersRouter.post("/register", createOneUser, getOneUserById);
usersRouter.post("/login", getOneUserByEmailAndPassword);
usersRouter.put("/:id", updateOneUser, getOneUserById);
usersRouter.delete("/:id", deleteOneUser);

module.exports = usersRouter;
