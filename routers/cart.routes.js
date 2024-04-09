const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/", cartController.cart);

router.post("/add/:productId", cartController.add);

router.delete("/delete/:itemId", cartController.delete);
router.delete("/buy", cartController.confirmBuy);

module.exports = router;
