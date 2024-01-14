const express = require("express");
const controller = require("../controllers/usersController");

const uploadAvatarMiddleware = require("../middlewares/uploadAvatarMiddleware");
const validateRegister = require('../middlewares/validateRegisterUserMiddleware');
const validateLogin = require('../middlewares/validateLoginUserMiddleware');

const router = express.Router();

router.get("/login", controller.login);
router.get("/register", controller.register);
router.get("/profile", controller.profile);
router.post(
  "/register",
  uploadAvatarMiddleware.single("avatar"),
  validateRegister,
  controller.processRegister
);
router.post("/login",validateLogin, controller.processLogin);

module.exports = router;
