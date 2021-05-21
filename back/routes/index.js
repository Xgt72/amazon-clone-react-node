const router = require("express").Router();
const usersRoutes = require("./users.routes");
const paymentRoutes = require("./payments.routes");
const productsRoutes = require("./products.routes");

router.use("/users", usersRoutes);
router.use("/payments", paymentRoutes);
router.use("/products", productsRoutes);

module.exports = router;
