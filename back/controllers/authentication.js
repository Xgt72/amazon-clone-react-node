require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const createToken = (req, res, next) => {
    const { user } = req.body;
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: "1h",
    });
    user.token = token;
    const { id, password, ...userWithoutPassword } = user;
    res.status(200).json(userWithoutPassword);
};

module.exports = { createToken };
