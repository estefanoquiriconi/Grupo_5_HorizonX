const express = require("express");
const controller = require("../controllers/usersController");

const uploadAvatarMiddleware = require("../middlewares/uploadAvatarMiddleware");
const validateRegister = require('../middlewares/validateRegisterUserMiddleware');

const router = express.Router();

router.get("/login", controller.login);
router.get("/register", controller.register);
router.post(
  "/register",
  uploadAvatarMiddleware.single("avatar"),
  validateRegister,
  controller.processRegister
);

module.exports = router;
