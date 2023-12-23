const express = require("express");
const controller = require("../controllers/usersController");
const uploadAvatarMiddleware = require("../middlewares/uploadAvatarMiddleware");

const router = express.Router();

router.get("/login", controller.login);
router.get("/register", controller.register);
router.post(
  "/register",
  uploadAvatarMiddleware.single("avatar"),
  controller.processRegister
);

module.exports = router;
