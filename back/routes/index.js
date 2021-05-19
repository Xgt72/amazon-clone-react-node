const router = require("express").Router();
const usersRoutes = require("./users.routes.js");
const paymentRoutes = require("./payments.routes.js");

router.use("/users", usersRoutes);
router.use("/payments", paymentRoutes);

module.exports = router;