const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");
const uploadProductMiddleware = require('../middlewares/uploadProductMiddleware');

router.get("/", controller.index);

router.get("/detail/:id", controller.detail);

router.get("/create", controller.create);
router.post("/create", uploadProductMiddleware.single('image'), controller.store);

router.get("/edit/:id", controller.edit);
router.put("/edit/:id",uploadProductMiddleware.single('image'),controller.update);

router.get("/productCart", controller.productCart);
router.post("/buy", controller.buy);
router.delete("/buy", controller.cartRemove);

router.delete("/delete/:id",controller.delete);


module.exports = router;
